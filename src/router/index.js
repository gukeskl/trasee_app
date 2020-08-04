import Vue from 'vue'
import VueRouter from 'vue-router'
import InputForm from '../views/InputForm'
import ChartsPanel from '../views/ChartsPanel'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Form',
    component: InputForm
  },
  {
    path: '/chart',
    name: 'Chart',
    component: ChartsPanel
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
