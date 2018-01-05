import Vue from 'vue'

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
  render: h => h(App)
})
