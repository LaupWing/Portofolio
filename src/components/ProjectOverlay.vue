<template>
    <div id="Project-Overlay">
        <div id="wrap">
            <iframe :src="project.link" frameborder="0"></iframe>
        </div>
        <i class="far fa-times-circle" @click="close"></i>
        <div class="info">

        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectOverlay',
    props:['project'],
    data(){
        return{

        }
    },
    methods:{
        close(){
            this.$emit('close')
        }
    },
    created(){
        console.log(this.project)
    }
}
</script>

<style>
#Project-Overlay{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(255,255,255,.95);
    top: 0;
    left: 0;
    z-index: 1000;
}
#Project-Overlay i.fa-times-circle{
    position: absolute;
    font-size: 2em;
    right: 20px;
    top: 20px;
    cursor: pointer;
}
#Project-Overlay #wrap { 
    width: 50vw; 
    height: 100vh; 
    padding: 0; 
    overflow: hidden; 
}
#Project-Overlay iframe { 
    width: 133.5%; 
    height: 133.5%;
}
#Project-Overlay iframe {
    -ms-zoom: 0.75;
    -moz-transform: scale(0.75);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.75);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.75);
    -webkit-transform-origin: 0 0;
}
</style>