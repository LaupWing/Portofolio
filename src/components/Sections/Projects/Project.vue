<template>
    <div class="project-card">

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
    }
}
</script>

<style>
.project-card{
    height: 400px;
    width: 300px;
    background: orange;
    margin: 10px;
    flex: 0 0 auto;
}
</style>