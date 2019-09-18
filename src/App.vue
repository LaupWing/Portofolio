<template>
  <div id="app" @scroll="scrollEvent">
    <Nav/>
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
  methods:{
    scrollEvent(){
      console.log(this.$el.scrollTop)
      document.querySelectorAll('section').forEach(section=>{
        
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
}
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Manjari', sans-serif;
  max-height: 100vh;
  overflow-y: overlay;
}
section#Home,
section#Projects,
section#Contact{
  width: 100vw;
  height: 100vh; 
  /* max-width: 100%; */
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
  background: var(--second-color);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%,0);
  z-index: -1;
}
</style>