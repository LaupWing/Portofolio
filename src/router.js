import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Sections/Home/Intro'
import Github from '@/components/Sections/Home/Github'
import Skills from '@/components/Sections/Home/Skills'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/Github',
      name: 'Github',
      component: Github
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: Skills
    }
  ]
})
