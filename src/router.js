import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import QuestionList from './components/QuestionListComponent.vue'
import QuestionDetail from './components/QuestionDetailComponent.vue'
import AskQuestion from './components/AskQuestionComponent.vue'
import User from './components/UserComponent.vue'
import Consultants from './components/UsersListComponent.vue'

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
      path: '/question/ask',
      name: 'ask',
      component: AskQuestion
    },
    {
      path: '/question/:id',
      name: 'question',
      component: QuestionDetail
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    },
    {
      path: '/users',
      component: Consultants
    }
  ]
})
