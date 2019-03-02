import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import QuestionListComponent from './components/QuestionListComponent.vue'
import QuestionComponent from './components/QuestionComponent.vue'

Vue.config.productionTip = false
Vue.component('app-question-list', QuestionListComponent)
Vue.component('app-question', QuestionComponent)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
