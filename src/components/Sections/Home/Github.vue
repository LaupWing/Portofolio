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
            commits: null
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
        this.getLastDayOfMonth(8)
    }
}
</script>

<style>

</style>