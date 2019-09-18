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

</style>