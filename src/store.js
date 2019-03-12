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
        author: 'Mohamed Camara',
        tags: [1, 2, 5]
      },
      4: {
        title: 'P.S: question',
        content: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        votes: 2,
        answers: 0,
        validated: false,
        author: 'Gautier Sebire',
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
    tagsList: [1, 2, 3, 5],
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
    answersList: [1, 2, 3, 4, 5, 6],
    users: {
      1: {
        firstName: 'Marc',
        lastName: 'Ammeux',
        email: 'marc.ammeux@ieseg.fr',
        position: 'Senior Consultant',
        office: 'Paris',
        questions: 2,
        answers: 0,
        comments: 3,
        tags: ['BFR', 'Tag 3']
      },
      2: {
        firstName: 'Lucile',
        lastName: 'Jeunemaître',
        email: 'lucile.jeunemaitre@gmail.com',
        position: 'External professional',
        office: 'Bordeaux',
        questions: 2,
        answers: 0,
        comments: 3,
        tags: ['Tag 2', 'Tag 5']
      },
      3: {
        firstName: 'Manon',
        lastName: 'Roux',
        email: 'Manon.roux@gmail.com',
        position: 'Intern',
        office: 'Paris',
        questions: 1,
        answers: 0,
        comments: 0,
        tags: ['Tag 1', 'Tag 3', 'Tag 5']
      },
      4: {
        firstName: 'Charlotte',
        lastName: 'Salmon',
        email: 'charlotte.salmon@ieseg.fr',
        position: 'Manager',
        office: 'Paris',
        questions: 21,
        answers: 11,
        comments: 41,
        tags: ['Tag 1', 'Tag 3']
      },
      5: {
        firstName: 'Frédéric',
        lastName: 'Bry',
        email: 'frederic.bry@ieseg.fr',
        position: 'Senior Manager',
        office: 'Lille',
        questions: 11,
        answers: 22,
        comments: 5,
        tags: ['Tag 1', 'Tag 3']
      },
      6: {
        firstName: 'Marcel',
        lastName: 'Lequesne',
        email: 'marcel.lequesne@ieseg.fr',
        position: 'Senior Manager',
        office: 'Lille',
        questions: 13,
        answers: 13,
        comments: 14,
        tags: ['Tag 1', 'Tag 3']
      },
      7: {
        firstName: 'Jessica',
        lastName: 'Calleti',
        email: 'jessica.Calleti@gmail.com',
        position: 'Office Manager',
        office: 'Paris',
        questions: 2,
        answers: 0,
        comments: 0,
        tags: ['Tag 1', 'Tag 3']
      },
      8: {
        firstName: 'Thomas',
        lastName: 'Gobeaux',
        email: 'thomas.gobeaux@ieseg.fr',
        position: 'Senior Consultant',
        office: 'Lille',
        questions: 2,
        answers: 1,
        comments: 3,
        tags: ['Tag 1', 'Tag 3']
      },
      9: {
        firstName: 'Gautier',
        lastName: 'Sebire',
        email: 'gautier.sebire@ieseg.fr',
        position: 'Senior Consultant',
        office: 'Lille',
        questions: 4,
        answers: 1,
        comments: 3,
        tags: ['Tag 1', 'Tag 3']
      },
      10: {
        firstName: 'Mohamed',
        lastName: 'Camara',
        email: 'mohamed.camara@ieseg.fr',
        position: 'Senior Consultant',
        office: 'Rennes',
        questions: 2,
        answers: 2,
        comments: 3,
        tags: ['Tag 1', 'Tag 3']
      }
    },
    usersList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
    },
    question: state => questionId => {
      return state.questions[questionId]
    },
    tags: state => {
      return state.tags
    },
    consultants: state => {
      return state.users
    },
    consultant: state => consultant => {
      return state.users[consultant]
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
