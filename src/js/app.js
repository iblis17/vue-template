import Vue from 'vue'
import VueRouter from 'vue-router'

import 'bulma'  // css
import 'fa'

import App from './vue/App.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'index',
  //   component: ...,
  // }
]

const router = new VueRouter({
  routes,
})


const app = new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
