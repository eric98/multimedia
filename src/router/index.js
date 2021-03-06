import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import MusicComponent from '@/components/MusicComponent'
import ClockComponent from '@/components/ClockComponent'
import GameComponent from '@/components/GameComponent'
import PaintComponent from '@/components/PaintComponent'

// const HelloWorld = () => import('@/components/HelloWorld')
// const MusicComponent = () => import('@/components/MusicComponent')
// const ClockComponent = () => import('@/components/ClockComponent')
// const GameComponent = () => import('@/components/GameComponent')

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
    },
    {
      path: '/game',
      name: 'Game',
      component: GameComponent
    },
    {
      path: '/paint',
      name: 'Paint',
      component: PaintComponent
    }
  ]
})
