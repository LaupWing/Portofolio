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
                    img: 'skills',
                    nameProject: 'Skills website',
                    description: 'A website that i made where you can monitor your skills. The skills will be monitored by the amount of projects you have done. You can add skills and projects in this website. These thing will be saved in the firebase database. ',
                    skills: ['vue', 'firebase']
                },
                {
                    link: null,
                    github: null,
                    img: 'tosti',
                    nameProject: 'Tosti boodschappenlijst',
                    description: 'A school project. This website is made for school with as goal 2 things in mind. 1 the user can make a sandwhich which adds te components to the shopping list and 2 this website needs to work without javascript. (serverside rendering)',
                    skills: ['node']
                },
                {
                    link: null,
                    github: null,
                    img: 'sphere',
                    nameProject: 'Sphere construction website',
                    description: 'One of my earliest website. This website serves as a practice for css.',
                    skills: ['css']
                },
                {
                    link: null,
                    github: 'Jones Webshop',
                    img: 'jones',
                    nameProject: 'Jones Webshop',
                    description: 'One of my earliest website. This website serves as a practice for css.',
                    skills: ['css']
                },
                {
                    link: null,
                    github: 'Spotify Game',
                    img: 'spotify',
                    nameProject: 'Spotify Game',
                    description: 'A school project. The main goal of this project was to use a api and make something cool with the receiving data. I chose for the spotify api and make a song guessing game',
                    skills: ['node', 'socket']
                },
                {
                    link: null,
                    github: 'Spotify Game',
                    img: 'dailyPlanner',
                    nameProject: 'Daily Planner',
                    description: 'A passion project. My own website where i can plan my day in. This project is still under construction',
                    skills: ['firebase', 'vue']
                },
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
    padding-bottom: 20px;
}

/* width */
#Projects main.project-container::-webkit-scrollbar {
    width: 10px;
    border-radius: 20px;
}

/* Track */
#Projects main.project-container::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 20px;
    width: 5px;
}
 
/* Handle */
#Projects main.project-container::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,.1); 
    border-radius: 20px;
    width: 5px;
}

/* Handle on hover */
#Projects main.project-container::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0,.2); 
}
</style>