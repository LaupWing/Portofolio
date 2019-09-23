<template>
    <section id="Projects">
        <div class="title">
            <h2 class="trade-mark">Projects</h2>
        </div>
        <main class="project-container">
            <Project
                v-for="(project,index) in projects"
                :key="index"
                :link="project.link"
                :github="project.github"
                :img="project.img"
                :nameProject="project.nameProject"
                :description="project.description"
                :skills="project.skills"
            />
        </main>
    </section>
</template>

<script>
import Project from '@/components/Sections/Projects/Project'
export default {
    name: 'Projects',
    data(){
        return{
            projects:[
                {
                    link: null,
                    github: null,
                    img: null,
                    nameProject: null,
                    description: null,
                    skills: ['vue']
                },
                {
                    link: null,
                    github: null,
                    img: null,
                    nameProject: null,
                    description: null,
                    skills: ['vue']
                },
                {
                    link: null,
                    github: null,
                    img: null,
                    nameProject: null,
                    description: null,
                    skills: ['vue']
                },
                {
                    link: null,
                    github: null,
                    img: null,
                    nameProject: null,
                    description: null,
                    skills: ['vue']
                }
            ]
        }
    },
    components:{
        Project
    },
    mounted(){
        const heightNav = document.querySelector('header#Nav').offsetHeight
        this.$el.querySelector('.title').style.top = `${heightNav}px`
    }
}
</script>

<style>
#Projects{
    background: var(--main-color);
    position: relative;
}
#Projects .title{
    position: absolute;
    top: 0;
}
#Projects h2{
    position: relative;
    font-size: 2em;
}
#Projects main.project-container{
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-x: auto;
    padding: 10px;
}
</style>