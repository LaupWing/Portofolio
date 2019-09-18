import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Sections/Home/Intro'
import Github from '@/components/Sections/Home/Github'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro,
      // children:[
      //   {
      //     path: '/intro',
      //     component: Intro
      //   }
      // ]
    },
    {
      path: '/Github',
      name: 'Github',
      component: Github
    }
  ]
})
