import Vue from 'vue'

// Vuex
import { store } from './store/store'

// Routes
import VueRouter from 'vue-router'
import { routes } from "./routes"

Vue.use(VueRouter)
const router = new VueRouter({ routes, mode: 'history' })

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
