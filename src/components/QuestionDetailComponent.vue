<template>
  <v-container
    id="grid"
    fluid
    grid-list-sm
    tag="section"
  >
    <v-layout row wrap>
      <v-flex tag="h1" class="headline">{{question(1).title}}</v-flex>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex>
            <v-card>
              <v-card-text>{{question(1).content}}</v-card-text>
              <v-card-actions>
                <v-btn flat color="blue">{{question(1).author}}</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 order-xs5 v-for="(answer,index) in answers(1)" :key="index">
        <v-layout column>
          <v-flex xs11>
            <v-card>
              <v-card-text class="text-lg-right">{{answer.content}}</v-card-text>
              <v-spacer></v-spacer>
              <v-btn flat color="green" v-if="answer.validated">Best answer</v-btn>
              <v-card-actions>
                <v-btn flat color="blue" @click="upvote({type: 'answers', id: index})">+</v-btn>
                <v-btn flat color="blue">{{answer.votes}}</v-btn>
                <v-btn flat color="blue" @click="downvote({type: 'answers', id: index})">-</v-btn>
                <v-spacer></v-spacer>
                <v-btn flat color="blue">{{answer.author}}</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {

  computed:{
    ...mapGetters([
      'answers',
      'numberOfAnswers',
      'question'
    ])
  },
  methods: {
    ...mapActions([
      'upvote',
      'downvote'
    ])
  }

}
</script>

<style>

</style>
