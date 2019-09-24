<template>
    <section id="Projects">
        <div class="title">
            <h2 class="trade-mark">Projects</h2>
        </div>
        <main class="project-container">
            <Project
                v-for="(project,index) in projects"
                :key="index"
                :project="project"
                v-on:openProjectOverlay="openProjectOverlay"
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
                    rank: 2,
                    link: 'https://skills-c5bfa.firebaseapp.com/home',
                    github: 'https://github.com/LaupWing/Skills',
                    img: 'skills',
                    nameProject: 'Skills website',
                    shortDescription: 'A website that i made where you can monitor your skills. The skills will be monitored by the amount of projects you have done. You can add skills and projects in this website. These thing will be saved in the firebase database. ',
                    longDescription:'I was always obsessed with learning new stuff and upgrading my so called skills. But the problem that i always had was that it was hard to measure how good you were at a certian skill and how to effectivly upgrade that certian skill. My solution for this problem is a website where you can add your own skill and link the projects to that skill. The amounts of projects you made works as a sort of measurement and inside every skill you can add subskills which works as sections in that certain skill. Code wise this project is one big mess, but if you want to look at the feel free to click on the github link',
                    skills: ['vue', 'firebase']
                },
                {
                    rank: 4,
                    link: 'https://boodschappenlijst-app.herokuapp.com/',
                    github: 'https://github.com/LaupWing/TostiBoodschappenlijst',
                    img: 'tosti',
                    nameProject: 'Tosti boodschappenlijst',
                    shortDescription: 'A school project. This website is made for school with as goal 2 things in mind. 1 the user can make a sandwhich which adds te components to the shopping list and 2 this website needs to work without javascript. (serverside rendering)',
                    skills: ['node']
                },
                {
                    rank: 7,
                    link: 'https://clever-heisenberg-90febc.netlify.com',
                    github: 'https://github.com/LaupWing/Css-Practice-Construction-website',
                    img: 'sphere',
                    nameProject: 'Sphere construction website',
                    shortDescription: 'One of my earliest website. This website serves as a practice for css.',
                    skills: ['css']
                },
                {
                    rank: 5,
                    link: 'https://hopeful-murdock-d6fbfb.netlify.com',
                    github: 'Jones Webshop',
                    img: 'jones',
                    nameProject: 'Jones Webshop',
                    shortDescription: 'One of my earliest website. This website serves as a practice for css.',
                    skills: ['css']
                },
                {
                    rank: 3,
                    link: 'https://spotifygame.herokuapp.com/',
                    github: 'https://github.com/LaupWing/Spotify-API',
                    img: 'spotify',
                    nameProject: 'Spotify Game',
                    shortDescription: 'A school project. The main goal of this project was to use a api and make something cool with the receiving data. I chose for the spotify api and make a song guessing game',
                    skills: ['node', 'socket']
                },
                {
                    rank: 1,
                    link: null,
                    github: 'https://github.com/LaupWing/Daily-Planner',
                    img: 'dailyPlanner',
                    nameProject: 'Daily Planner',
                    shortDescription: 'A passion project. My own website where i can plan my day in. This project is still under construction',
                    skills: ['firebase', 'vue']
                },
                {
                    rank: 6,
                    link: ' https://naughty-wescoff-3881e8.netlify.com/',
                    github: 'https://github.com/LaupWing/Css-practice-Resident-website',
                    img: 'hayden',
                    nameProject: 'Hayden Architecture website',
                    shortDescription: 'One of my earliest website. This website serves as a practice for css.',
                    skills: ['css']
                },
            ]
        }
    },
    components:{
        Project
    },
    methods:{
        openProjectOverlay(project){
            this.$emit('openProjectOverlay',project)
        }
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