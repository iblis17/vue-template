import Vue from 'vue'

import 'bulma'  // css
import 'fa'

import App from './vue/App.vue'


const app = new Vue({
  el: 'body',
  render: h => h(App),
})
