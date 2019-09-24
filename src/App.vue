<template>
  <div id="app" @scroll="scrollEvent">
    <Nav
      :section="section"
    />
    <Home/>
    <Projects
        v-on:openProjectOverlay="openProjectOverlay"
    />
    <Contact/>
    <transition name="starting-point">
        <ProjectOverlay
            v-if="projectOverlay"
            :projectOverlay="projectOverlay"
            v-on:close="openProjectOverlay"
        />
    </transition>
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import Home from '@/components/Sections/Home'
import Contact from '@/components/Sections/Contact'
import Projects from '@/components/Sections/Projects'
import ProjectOverlay from '@/components/ProjectOverlay'

export default {
  name: 'App',
  components:{
    Nav,
    Home,
    Contact,
    Projects,
    ProjectOverlay
  },
  data(){
    return{
      section: 'Home',
      projectOverlay: null
    }
  },
  methods:{
    scrollEvent(){
        if(this.$el.scrollTop > 10){
            this.$el.querySelector('header#Nav').classList.add('expand')
        }else if(this.$el.scrollTop <10){
            this.$el.querySelector('header#Nav').classList.remove('expand')
        }
        document.querySelectorAll('section').forEach(section=>{
            const navHeight = this.$el.querySelector('header#Nav').offsetHeight
            const begin = this.$el.scrollTop > (section.offsetTop-navHeight)
            const end = this.$el.scrollTop < (section.offsetTop + section.offsetHeight)-navHeight
            if(begin && end){
            this.section = section.id
            }
        })
    },
    openProjectOverlay(project,pos){
        if(project){
            this.$el.style.setProperty('--starting-y', `${pos.y}px`)
            this.$el.style.setProperty('--starting-x', `${pos.x}px`)
            this.projectOverlay = {project,pos}
        }else{
            this.projectOverlay = null
        }
    }
  },
  mounted(){
    const heightNav = document.querySelector('header#Nav').offsetHeight
    this.$el.querySelectorAll('section .title').forEach(title=>{
        console.log(title)
        title.style.top = `${heightNav}px`
    })
  }
}
</script>
<style>

*{
    box-sizing: border-box;
}
:root{
    --main-color: white;
    --second-color: black;
    --container-width: 900px;
}
body{
    margin: 0;
    padding: 0;
}
#app {
    font-family: 'Manjari', sans-serif;
    max-height: 100vh;
    overflow-y: overlay;
    scroll-behavior: smooth;
    overflow-x: hidden;
    --starting-y: 0px;
    --starting-x: 0px;
}
section#Home,
section#Projects,
section#Contact{
    width: 100vw;
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
}
a{
    text-decoration: none;
    color: var(--second-color);
}
main{
    max-width: var(--container-width);
    margin: 0 auto; 
}

.trade-mark{
    border-bottom: 1px solid var(--second-color);
    position: relative;
    background: var(--main-color);
}
.trade-mark::after{
    content:'';
    width: 20px;
    height: 10px;
    background-color: var(--second-color);
    border-bottom-left-radius: 110px;
    border-bottom-right-radius: 110px;
    position: absolute;
    border-top: 0;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%,0);
}
.starting-point-enter-active {
  animation: customStartingpoint 1s;
}
.starting-point-leave-active {
  animation: customStartingpoint 1s reverse;
}
@keyframes customStartingpoint {
    from{
        top: var(--starting-y);
        left: var(--starting-x);
        transform: scale(0);
    }to{
        top: 0;
        left: 0;
        transform: scale(1);
    }
}
</style>