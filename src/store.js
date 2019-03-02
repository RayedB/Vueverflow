import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    questions: {
      1: {
        title: 'Here is my question',
        content: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        votes: 127,
        validated: true
      },
      2: {
        title: 'Here is another question',
        content: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        votes: 17,
        validated: false
      },
      3: {
        title: 'Last question',
        content: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        votes: 12,
        validated: false
      },
      4: {
        title: 'P.S: question',
        content: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        votes: 2,
        validated: false
      }
    },
    questionsList: [1, 2, 3, 4]
  },
  getters: {
    numberOfQuestions: (state) => {
      return state.questionsList.length
    }

  },
  mutations: {
    upvote: (state, payload) => {
      state.questions[1].votes++
    },
    downvote: (state, payload) => {
      state.questions[1].votes--
    }
  },
  actions: {
    upvote: (context, payload) => {
      context.commit('upvote', payload)
    },
    downvote: (context, payload) => {
      context.commit('downvote', payload)
    }
  }
})
