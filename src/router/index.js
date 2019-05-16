import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import Home from '@/components/Home'
import Animation from '@/components/Animation'

Vue.use(Router)
Vue.use(iView)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/animation/:id',
      name: 'Animation',
      component: Animation
    }
  ]
})
