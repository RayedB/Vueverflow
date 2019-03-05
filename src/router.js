import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import QuestionList from './components/QuestionListComponent.vue'
import QuestionDetail from './components/QuestionDetailComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: QuestionList
    },
    {
      path: '/question/:id',
      name: 'question',
      component: QuestionDetail
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
