<template>
    <div id="Github">
        <h2>Github</h2>
    </div>
</template>

<script>
export default {
    name: 'Github',
    data(){
        return{
            commits: null,
            timespan: []
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
        },
        getLastDayOfMonth(month){
            const date = new Date(2008, month + 1, 0)
            const day = date.getDate()
            return day
        },
        getCommits(repo){
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
                    year: month === 1 && day === 1 ? year-1 : year, // this formule isnt correct yet maybe in the future i will change it
                    month: day - i > 0 ? month : month === 1 ? 12 : month -1  
                })
            }
            console.log(this.timespan)
        }
    },
    async created(){
        const repos = await this.getRepos()
        const commitsPromise = repos.map(r=>this.getCommits(r))
        const commitsRaw = await Promise.all(commitsPromise)
                .then(values=>values)
        const commits = commitsRaw.map((raw,index)=>{
            return raw.map(c=>{
                return{
                    repo: repos[index],
                    message: c.commit.message,
                    date: c.commit.committer.date
                }
            })
        })
        this.commits = commits.flat(Infinity)
        this.timeline()
    }
}
</script>

<style>

</style>