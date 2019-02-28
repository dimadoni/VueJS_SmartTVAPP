import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home  from '../Pages/home'
import channels from '../Pages/channels'
import VueResource from 'vue-resource'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/channels',
      name: 'channels',
      component: channels
    }
  ],
  mode: 'history'
})
