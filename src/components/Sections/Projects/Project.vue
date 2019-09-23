<template>
    <div class="project-card">
        <img :src="getImgUrl(img)" alt="">
        <div class="info">
            <h3>{{nameProject}}</h3>
            <p>{{description}}</p>
            <div class="skills"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props:['github', 'link', 'description', 'skills', 'nameProject', 'img'],
    data(){
        return{
            name: 'Project'
        }
    },
    methods:{
        getImgUrl(pic) {
            return require('../../../assets/projects/'+pic+'.png')
        }
    }
}
</script>

<style>
.project-card{
    height: 400px;
    width: 300px;
    background: white;
    border: rgba(0,0,0,.2) solid 1px;
    margin: 10px;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
}
.project-card h3{
    margin: 0;
    font-size: 1em;
    padding: 10px;
}
.project-card img{
    width: 100%;
    height: 40%;
}
</style>