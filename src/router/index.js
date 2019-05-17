import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import Home from '@/components/Home'
import Animation from '@/components/Animation'
import Register from '@/components/Register'
import Login from '@/components/Login'

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
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
