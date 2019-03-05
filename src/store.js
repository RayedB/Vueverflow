import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: {
      1: {
        title: 'Here is my question',
        content: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        votes: 127,
        answers: 2,
        author: 'Thomas Gobeaux',
        tags: [1, 3, 5]
      },
      2: {
        title: 'Here is another question',
        content: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        votes: 17,
        answers: 1,
        validated: false,
        author: 'Jessica Calleti',
        tags: [1, 3]
      },
      3: {
        title: 'Last question',
        content: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        votes: 12,
        answers: 0,
        validated: false,
        author: 'Mohamed Mechbal',
        tags: [1, 2, 5]
      },
      4: {
        title: 'P.S: question',
        content: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        votes: 2,
        answers: 0,
        validated: false,
        author: 'François Bosca',
        tags: [2]
      }
    },
    questionsList: [1, 2, 3, 4],
    tags: {
      1: {
        name: 'Automobile'
      },
      2: {
        name: 'BFR'
      },
      3: {
        name: 'Creance douteuse'
      },
      5: {
        name: 'Bilan'
      }
    },
    answers: {
      1: {
        author: 'Marcel Lequesne',
        content: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        votes: 17,
        answersQuestion: 2,
        validated: true
      },
      2: {
        author: 'Marc Ammeux',
        content: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        votes: 11,
        answersQuestion: 1,
        validated: true
      },
      3: {
        author: 'Frederic Bry',
        content: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        votes: 2,
        answersQuestion: 2,
        validated: false
      },
      4: {
        author: 'Charlotte Salmon',
        content: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        votes: 17,
        answersQuestion: 1,
        validated: false
      },
      5: {
        author: 'Manon Roux',
        content: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        votes: 0,
        answersQuestion: 2,
        validated: true
      },
      6: {
        author: 'Lucile Jeunemaître',
        content: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        votes: 17,
        answersQuestion: 2,
        validated: true
      }
    },
    answersList: [1, 2, 3, 4, 5, 6]
  },
  getters: {
    numberOfQuestions: state => {
      return state.questionsList.length
    },
    numberOfAnswers: state => {
      return state.answersList.length
    },
    answers: state => question => {
      let correspondingAnswers = {}
      for (let [key, value] of Object.entries(state.answers)) {
        if (value.answersQuestion === question) {
          correspondingAnswers[key] = value
        }
      }
      console.log(correspondingAnswers)
      return correspondingAnswers
      // return state.answers.map(answers => console.log(answers))
    },
    question: state => questionId => {
      // return state.questions[payload]
      return state.questions[questionId]
    }

  },
  mutations: {
    upvote: (state, payload) => {
      state[payload.type][payload.id].votes++
    },
    downvote: (state, payload) => {
      state[payload.type][payload.id].votes--
    }
  },
  actions: {
    upvote: (context, payload) => {
      console.log(payload)
      context.commit('upvote', payload)
    },
    downvote: (context, payload) => {
      context.commit('downvote', payload)
    }
  }
})
