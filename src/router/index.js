import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('@/components/HelloWorld')
const MusicComponent = () => import('@/components/MusicComponent')
const ClockComponent = () => import('@/components/ClockComponent')

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
