<template>
  <div id="app" @scroll="scrollEvent">
    <Nav
      :section="section"
    />
    <Home/>
    <Projects/>
    <Contact/>
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import Home from '@/components/Sections/Home'
import Contact from '@/components/Sections/Contact'
import Projects from '@/components/Sections/Projects'
import debounce from 'debounce'

export default {
  name: 'App',
  components:{
    Nav,
    Home,
    Contact,
    Projects
  },
  data(){
    return{
      section: 'Home'
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
    }
  },
  mounted(){
    // window.addEventListener('scroll', debounce(this.scrollEvent,200))
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
</style>