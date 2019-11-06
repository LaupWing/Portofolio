<template>
    <section id="Projects">
        <div class="title">
            <h2 class="trade-mark">Projects</h2>
        </div>
        <main>
            <nav>
                <div  
                    v-for="(item, index) in navItems"
                    :key="index"
                    class="type"
                    :class="item"
                >
                    <p>{{item.type}} by:</p>
                    <button @click="openMenu(item.type)">{{setButtonText(item.type)}}</button>
                    <ul class="choices" v-if="activeFilterSort===item.type">
                        <h2>{{item.type}}</h2>
                        <li 
                            v-for="(choice,index) in item.choices"
                            :key="index"
                            :class="[setActiveFilterSort(item.type, choice) ?  'active': 'not-active']"
                            @click="setFilterSort(item.type,choice)"
                        >
                            {{choice}}
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="project-container">
                <Project
                    v-for="(project,index) in projectsAdjustment"
                    :key="index"
                    :project="project"
                    v-on:openProjectOverlay="openProjectOverlay"
                />
            </div>
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
                    longDescription:'This is a school project, where i have to make a website which is operatable without javascript support. This was lots of fun to make because i have tingle alot with node and express. Also i have found lots of javascript replacements. For example i can hide and show stuff with only checkboxes instead of using javascript. I have learned to do things without clientside javascript and that has boost my node skills and especially css',
                    skills: ['node']
                },
                {
                    rank: 7,
                    link: 'https://clever-heisenberg-90febc.netlify.com',
                    github: 'https://github.com/LaupWing/Css-Practice-Construction-website',
                    img: 'sphere',
                    nameProject: 'Sphere construction website',
                    shortDescription: 'One of my earliest website. This website serves as a practice for css.',
                    longDescription:'This is one of my many first websites where i pick up a website from wix, squarspace or other website builders platform. The main focus of this website is to upgrade my css knowledge and html structure. But besides the css and html experience i gained, i also gained lots of styling experience and UX design from copying websites',
                    skills: ['css']
                },
                {
                    rank: 5,
                    link: 'https://hopeful-murdock-d6fbfb.netlify.com',
                    github: 'Jones Webshop',
                    img: 'jones',
                    nameProject: 'Jones Webshop',
                    shortDescription: 'One of my earliest website. This website serves as a practice for css.',
                    longDescription: 'This is one of my many first websites where i pick up a website from wix, squarspace or other website builders platform. The main focus of this website is to upgrade my css knowledge and html structure. But besides the css and html experience i gained, i also gained lots of styling experience and UX design from copying websites',
                    skills: ['css']
                },
                {
                    rank: 3,
                    link: 'https://spotifygame.herokuapp.com/',
                    github: 'https://github.com/LaupWing/Spotify-API',
                    img: 'spotify',
                    nameProject: 'Spotify Game',
                    shortDescription: 'A school project. The main goal of this project was to use a api and make something cool with the receiving data. I chose for the spotify api and make a song guessing game',
                    longDescription:'This was a school project where i needed to use a api to make a cool website. I decided to make a game with the Spotify Api. This game is a simple guess the song game. You can play this game with multiple players. The reason why this project is on number 3 is that because it has a lot of javascript incoorperated into this project. I used some node and sockets for this, but a lot of the code lives in the client side javascript. Feel free to click on the link icon and play this game.',
                    skills: ['node', 'socket']
                },
                {
                    rank: 1,
                    link: null,
                    github: 'https://github.com/LaupWing/Daily-Planner',
                    img: 'dailyPlanner',
                    nameProject: 'Daily Planner',
                    shortDescription: 'A passion project. My own website where i can plan my day in. This project is still under construction',
                    longDescription:'This is until now my favorite and best personal project yet. The reason why is that this website solves my bigges problem and main source of stress and that is time managing. Most of the planner tools doesnt meet my wishes so i decided to make my own daily planner. Another reason why i love this project is that has a lot of functionality where i can display all my skills in the field of Vue and Javascript. I want to do lots of things in my day and by making this website i hopefully can help other people who has the same problem as me. and help them boost their productivity',
                    skills: ['firebase', 'vue']
                },
                {
                    rank: 6,
                    link: ' https://naughty-wescoff-3881e8.netlify.com/',
                    github: 'https://github.com/LaupWing/Css-practice-Resident-website',
                    img: 'hayden',
                    nameProject: 'Hayden Architecture website',
                    shortDescription: 'One of my earliest website. This website serves as a practice for css.',
                    longDescription: 'This is one of my many first websites where i pick up a website from wix, squarspace or other website builders platform. The main focus of this website is to upgrade my css knowledge and html structure. But besides the css and html experience i gained, i also gained lots of styling experience and UX design from copying websites',
                    skills: ['css']
                },
                {
                    rank: 8,
                    link: ' https://hungry-mahavira-d1c413.netlify.com/',
                    github: 'https://github.com/LaupWing/react-type-tester',
                    img: 'react-type-test',
                    nameProject: 'React Type test',
                    shortDescription: 'My first react app',
                    longDescription: 'My first react web app. This is a typing test website to discover how may words you can type in a minute. Here i use redux react to make this website. I have run into many problems while making this app. Mainly in relation with the redux and state managing.',
                    skills: ['react']
                },
            ],
            navItems: [
                {
                    type:'sort',
                    choices: [
                        'Best Project First',
                        'Worst Project First',
                        'Alphabetic A to Z',
                        'Alphabetic Z to A',
                    ]
                }, 
                {
                    type:'filter',
                    choices: null
                }
            ],
            activeFilterSort: null,
            sort: 'Best Project First',
            filter: 'no filter'
        }
    },
    components:{
        Project
    },
    methods:{
        openProjectOverlay(project,pos){
            this.$emit('openProjectOverlay',project,pos)
        },
        openMenu(type){
            if(this.activeFilterSort == type){
                this.activeFilterSort = null
            }else{
                this.activeFilterSort = type
            }
        },
        setButtonText(type){
            if(this[type]){
                return this[type]
            }else{
                return type
            }
        },
        setFilterSort(type, choice){
            this[type] = choice
            this.activeFilterSort = null
        },
        sortName(a,b){
            if(this.sort === 'Alphabetic A to Z'){
                if(a.nameProject < b.nameProject) { return -1; }
                if(a.nameProject > b.nameProject) { return 1; }
                return 0;
            }else{
                if(a.nameProject > b.nameProject) { return -1; }
                if(a.nameProject < b.nameProject) { return 1; }
                return 0;
            }
        },
        onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        },
        setFilterOptions(){
            const array = this.projects.map(p=>p.skills).flat(Infinity).filter(this.onlyUnique)   
            array.push('no filter')
            return array
        },
        setActiveFilterSort(type, choice){
            if(this[type]===choice)    return true
            return false
        }
    },
    created(){
        this.navItems = this.navItems.map(item=>{
            if(item.type === 'filter'){
                item.choices = this.setFilterOptions()
            }
            return item
        })
    },
    computed:{
        projectsAdjustment(){
            let projectsArray = this.projects
            if(this.sort){
                if(this.sort === 'Best Project First'){
                    projectsArray = projectsArray.sort((a,b)=>a.rank-b.rank)
                }
                else if(this.sort === 'Worst Project First'){
                    projectsArray = projectsArray.sort((a,b)=>b.rank-a.rank)
                }
                else if(this.sort === 'Alphabetic A to Z' || this.sort === 'Alphabetic Z to A'){
                    projectsArray = projectsArray.sort(this.sortName)
                }
            }
            if(this.filter){
                if(this.filter === 'no filter'){
                    return projectsArray
                }
                projectsArray = projectsArray.filter(p=>{
                    return p.skills.includes(this.filter)
                })
            }
            return projectsArray
        },
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
#Projects main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
}
#Projects main nav{
    min-width: 500px;
    display: flex;
    width: 70%;
    justify-content: space-between;
    margin: 20px 0;
}
#Projects main nav .type{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
#Projects nav .type ul::before{
    content: '';
    width: 20px;
    height: 20px;
    background: white;
    position: absolute;
    border: rgba(0,0,0,.2) 1px solid;
    z-index: -1;
    top: -10px;
    left: 50%;
    transform: translate(-50%,0) rotate(45deg);
}
#Projects nav .type ul{
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    padding: 0;
    bottom: -10px;
    left: 50%;
    transform: translate(-35%,100%);
    z-index: 1000;
    background: white;
    position: absolute;
    border: rgba(0,0,0,.2) 1px solid;
    min-width: 150px;
}
#Projects nav .type ul h2{
    z-index: 10;
    background: white;
    font-weight: normal;
    margin: 0;
    padding: 10px;
    font-size: 1em;
    letter-spacing: 1px;
    border-bottom: solid 1px rgba(0,0,0,.2);
    text-align: center;
    text-transform: uppercase;
}
#Projects nav .type ul li{
    list-style: none;
    padding: 5px 10px;
    white-space: nowrap;
    border-bottom: rgba(0,0,0,.2) 1px solid;
    transition: .25s;
    cursor: pointer;
}
#Projects nav .type ul li.active{
    background: orange;
    color: white;
    cursor: pointer;
}
#Projects nav .type ul li.not-active:hover{
    background: black;
    color: white;
}
#Projects main nav button{
    outline: none;
    border: solid rgba(0,0,0,.2) 1px;
    background: transparent;
    padding: 7px 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom-width: 5px;
    font-size: .7em;
    margin: 0 10px;
}
#Projects .project-container{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 20px;
    max-width: 100%;
}
/* width */
#Projects .project-container::-webkit-scrollbar {
    width: 10px;
    border-radius: 20px;
}
/* Track */
#Projects .project-container::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 20px;
    width: 5px;
}
/* Handle */
#Projects .project-container::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,.1); 
    border-radius: 20px;
    width: 5px;
}
/* Handle on hover */
#Projects .project-container::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0,.2); 
}
</style>