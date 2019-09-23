<template>
    <div class="project-card">
        <div class="img-container">
            <div class="see-more">
                <p class="info">These links will open in a new tab</p>
                <p v-if="!github && !link">No link and github available</p>
                <i v-if="github" @click="openInNewTab(github)" class="fab fa-github"></i>
                <i v-if="link" @click="openInNewTab(link)" class="fas fa-external-link-alt"></i>
            </div>
            <img :src="getImgUrl(img)" alt="">
        </div>
        <div class="info">
            <h3>{{nameProject}}</h3>
            <p class="description">{{description}}</p>
            <div class="skills">
                <p 
                    class="skill"
                    v-for="(skill,index) in skills"
                    :key="index"
                    :style="setStyle(skill)"
                >
                    {{skill}}
                </p>
            </div>
        </div>
        <div 
            class="popup"
            :class="{'disabled':!link, 'active':link}"
            @click="openProjectOverlay"
        >
            <p>watch iframe <i class="far fa-eye"></i></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props:['github', 'link', 'description', 'skills', 'nameProject', 'img','project'],
    data(){
        return{
            name: 'Project',
            skillColors: [
                {
                    skill: 'vue',
                    color: '#4BB583'
                },
                {
                    skill: 'node',
                    color: '#87C000'
                },
                {
                    skill: 'firebase',
                    color: '#F8C429'
                },
                {
                    skill: 'css',
                    color: '#2965F1'
                },
                {
                    skill:'socket',
                    color: '#010101'
                }
            ]
        }
    },
    methods:{
        getImgUrl(pic) {
            return require('../../../assets/projects/'+pic+'.png')
        },
        setStyle(skill){
            const findColor = this.skillColors.find(sk=>sk.skill===skill)
            return {
                color: findColor.color,
                borderColor: findColor.color
            }
        },
        openInNewTab(url){
            const win = window.open(url, '_blank');
            win.focus();
        },
        openProjectOverlay(){
            if(!this.link)  return
            this.$emit('openProjectOverlay', this.project)   
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
    position: relative;
    overflow: hidden;
}
.project-card h3{
    margin: 0;
    font-size: 1.2em;
    padding: 10px;
}
.project-card .img-container{
    width: 100%;
    height: 40%;
    position: relative;
}
.project-card .img-container:hover .see-more{
    transform: translate(0,0);
}
.project-card .see-more{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0,-100%);
    transition: .5s;
    background: rgba(255,2552,255,.95);
    display: flex;
    justify-content: center;
    align-items: center;
}
.project-card .see-more p.info{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: .8em;
    color: rgba(0,0,0,.4);
    margin: 0;
    text-align: center;
    padding: 5px 0;
}
.project-card .see-more p{
    font-size: 1em;
}
.project-card .see-more i{
    font-size: 2em;
    margin: 0 20px;
    cursor: pointer;
    /* transition: .5s; */
}
.project-card .see-more i:hover{
    color: orange;
}
.project-card img{
    width: 100%;
    height: 100%;
}
.project-card p.description{
    padding: 10px;
    font-size: .8em;
    padding-top: 0;
    margin: 0;
}
.project-card .popup{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px;
    text-align: center;
    color: black;
    border-top: rgba(0,0,0,.2) solid 1px; 
    transition: .25s;
}
.project-card .popup.disabled{
    background: rgba(0,0,0,.2);
    color: rgba(0,0,0,.2);
}
.project-card .popup.active:hover{
    background: black;
    color: white;
    cursor: pointer;
}
.project-card .popup p{
    margin: 0;
}
.project-card .skills{
    display: flex;
    padding: 10px;
    padding-top: 0;
}
.project-card p.skill{
    font-weight: bold;
    font-size: .8em;
    border-width: 2px;
    border-style: solid;
    text-transform: uppercase;
    display: inline-block;
    padding: 5px 7px;
    border-radius: 5px;
    margin: 5px;
}
</style>