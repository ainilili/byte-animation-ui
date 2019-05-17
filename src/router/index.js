import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import ElementUI from 'element-ui'
import 'iview/dist/styles/iview.css'

import Home from '@/components/Home'
import Animation from '@/components/Animation'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Upload from '@/components/Upload'

Vue.use(Router)
Vue.use(iView)
Vue.use(ElementUI)

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
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }
  ]
})
