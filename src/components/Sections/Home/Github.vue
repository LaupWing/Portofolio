<template>
    <div id="Github">
        <h2 @click="checkData">Github</h2>
        <div class="activity-container">
            <div 
                class="day"
                v-for="(day, index) in timespanWithCommits"
                :key="index"
            >

            </div>
        </div>   
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
    name: 'Github',
    data(){
        return{
            commits: null,
            timespan: [],
            timespanWithCommits: [],
            commitsForThisTimespan: 0,
            error:[],
            commitsMethod: null
        }
    },
    methods:{
        getRepos(){
            const url = 'https://api.github.com/users/LaupWing/repos?per_page=100'
            return fetch(url)
                    .then(res=>res.json())
                    .then(data=>{
                        return data
                            .sort((a,b)=>{
                                if(a.created_at > b.created_at){
                                    return -1
                                }
                                if(a.created_at < b.created_at){
                                    return 1
                                }
                                return 0
                                
                            })
                            .slice(0,25)
                            .map(d=>d.name)
                    })
                    .then(names=>{
                        this.getAllCommits(names)
                    })
                    .catch(err=>{
                        this.getCommitsFirebase()
                        this.error.push(err.message)
                    })
        },
        checkData(){
            console.log(this.commits)
        },
        getLastDayOfMonth(month){
            const date = new Date(2008, month + 1, 0)
            const day = date.getDate()
            return day
        },
        getAllCommits(names){
            const commitsPromise = names.map(n=>this.getCommit(n))
            Promise.all(commitsPromise)
                .then(values=>values)
                .then(commitsRaw=>{
                    const commits = commitsRaw.map((raw,index)=>{
                        return raw.map(c=>{
                            return{
                                repo: names[index],
                                message: c.commit.message,
                                date: c.commit.committer.date
                            }
                        })
                    })
                    this.commits = commits.flat(Infinity)
                    this.commitsMethod = 'The data above is realtime received by the Github API'
                    this.linkCommitsToDate()
                    db
                        .collection('mycommits')
                        .doc('commits')
                        .set({
                            allCommits: this.commits,
                            createdAt: new Date()
                        })
                        .then(()=>console.log('data has been set in the firebase database'))
                        .catch(err=>console.log(err))
                })
                .catch(err=>{
                    this.getCommitsFirebase()
                    this.error.push(err.message)
                })
        },
        getCommitsFirebase(){
            db
                .collection('mycommits')
                .doc('commits')
                .get()
                .then(doc=>{
                    this.commitsMethod = `The data is received by my own database from the date ${doc.data().createdAt}`
                    this.commits = doc.data().allCommits
                })
        },
        getCommit(repo){
            const url = `https://api.github.com/repos/LaupWing/${repo}/commits?per_page=500`
            return fetch(url)
                    .then(res=>res.json())
                    .then(data=>data)
        },
        timeline(){
            const date = new Date()
            const day = date.getDate()
            const month = date.getMonth()+1
            const year= date.getFullYear()
            for(let i=0; i<10; i++){
                this.timespan.push({
                    day: day - i !== 0 ? day - i : i === 1 ? this.getLastDayOfMonth(month-1) : (this.getLastDayOfMonth(month-1) - i) + 1,
                    year: month === 1 && day === 1 ? year-1 : year, // this formule isnt correct yet maybe in the future i will change it NOTE
                    month: day - i > 0 ? month : month === 1 ? 12 : month -1  
                })
            }
        },
        linkCommitsToDate(){
            this.timespanWithCommits = this.timespan.map(span=>{
                const newObj = span
                newObj.commits = this.commits.filter(commit=>{
                    const date = new Date(commit.date)
                    const day = date.getDate()
                    const month = date.getMonth()+1
                    const year = date.getFullYear()
                    if(
                        day === span.day &&
                        month === span.month &&
                        year === span.year
                    ){
                        return commit
                    }
                })
                this.commitsForThisTimespan = this.commitsForThisTimespan + newObj.commits.length
                return newObj
            })
            console.log(this.timespanWithCommits)
        }
    },
    async created(){
        this.getRepos()
        this.timeline()
    }
}
</script>

<style>
#Github .day{
    width: 20px;
    height: 20px;
    background: orange;
    margin: 10px;
}
#Github .activity-container{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
</style>