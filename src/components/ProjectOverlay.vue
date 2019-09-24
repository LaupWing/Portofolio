<template>
    <div id="Project-Overlay">
        <div id="wrap">
            <iframe :src="project.link" frameborder="0"></iframe>
        </div>
        <i class="far fa-times-circle" @click="close"></i>
        <div class="info-wrapper">
            <div class="info">
                <div class="main-info">
                    <h3 class="rank">{{project.rank}}</h3>
                    <div class="general">
                        <h2>{{project.nameProject}}</h2>
                        <div class="skills">
                            <p 
                                class="skill"
                                v-for="(skill, index) in project.skills"
                                :key="index" 
                                :style="setSkillStyle(skill)"
                            >
                            {{skill}}  
                            </p>
                        </div>
                    </div>
                </div>
                <p class="long-description">{{project.longDescription}}</p>
                <div class="links">
                    <i 
                        @click="openInNewTab(project.github)" 
                        class="fab fa-github"
                        :class="{'active': project.github, 'disabled': !project.github}"
                    >
                    </i>
                    <i 
                        @click="openInNewTab(project.link)" 
                        class="fas fa-external-link-alt"
                        :class="{'active': project.link, 'disabled': !project.link }"
                    >
                    </i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getSkillColor from '@/helpers/skillColors'
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
        },
        setSkillStyle(skill){
            const skillColor = getSkillColor(skill)
            return {
                borderColor: skillColor,
                color: skillColor
            }
        },
        openInNewTab(url){
            if(url){
                const win = window.open(url, '_blank');
                win.focus();
            }
        },
    },
    created(){
    }
}
</script>

<style>
#Project-Overlay{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(255,255,255,.97);
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    width: 166.5%; 
    height: 166.5%;
}
#Project-Overlay iframe {
    -ms-zoom: 0.6;
    -moz-transform: scale(0.6);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.6);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.6);
    -webkit-transform-origin: 0 0;
}
#Project-Overlay .info-wrapper{
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
#Project-Overlay .info{
    width: 60%;
    height: 70%;
}
#Project-Overlay .main-info{
    display: flex;
    align-items: flex-end;
}
#Project-Overlay .main-info .general{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
#Project-Overlay .main-info .general .skills{
    display: flex;
    align-items: center;
    padding: 0 10px;
}

#Project-Overlay .main-info .general .skill{
    border-width: 2px;
    padding: 3px 5px;
    border-style: solid;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 5px;
    font-size: .8em;
}
#Project-Overlay .info h2{
    margin: 0;
    padding: 0 10px;
}
#Project-Overlay h3.rank{
    color: white;
    background: orange;
    font-size: 10em;
    margin: 0;
    padding: 10px 30px;
    position: relative;
}
#Project-Overlay h3.rank::before{
    content: 'Rank of this project(my personal rank)';
    position: absolute;
    font-size: .05em;
    white-space: nowrap;
    left: 0;
    top: -10px;
    color: rgba(0,0,0,.6);
    left: 50%;
    transform: translate(-50%,0);
}

#Project-Overlay .long-description{
    font-size: .8em;
}

#Project-Overlay .links{
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 2.5em;
}
#Project-Overlay .links i{
    margin: 10px 20px;
}
#Project-Overlay .links i.disabled{
    background: rgba(0,0,0,.4);
}
#Project-Overlay .links i.active:hover{
    color: orange;
    cursor: pointer;
}
</style>