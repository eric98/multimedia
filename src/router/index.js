import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MusicComponent from '@/components/MusicComponent'
import ClockComponent from '@/components/ClockComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/music',
      name: 'Music',
      component: MusicComponent
    },
    {
      path: '/clock',
      name: 'Clock',
      component: ClockComponent
    }
  ]
})
