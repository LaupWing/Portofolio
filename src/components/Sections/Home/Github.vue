<template>
    <div id="Github">
        <h2>Github</h2>
    </div>
</template>

<script>
export default {
    name: 'Github',
    methods:{
        getRepos(){
            const url = 'https://api.github.com/users/LaupWing/repos?per_page=100'
            return fetch(url)
                    .then(res=>res.json())
                    .then(data=>data.map(d=>d.name))
        }
    },
    async created(){
        const repos = await this.getRepos()
    }
}
</script>

<style>

</style>