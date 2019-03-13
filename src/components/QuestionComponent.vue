<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md1>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card color="red lighten-2" dark @click="upvote({type: 'questions', id: questionIndex+1})">
                  <v-card-text> + </v-card-text>
                </v-card>
              </v-flex>
              <v-flex d-flex xs12>
                <v-card color="red lighten-2" dark @click="validate">
                  <v-card-text>{{ votes }}</v-card-text>
                </v-card>
              </v-flex>
              <v-flex d-flex xs12 @click="downvote({type: 'questions', id: questionIndex+1})">
                <v-card color="red lighten-2" dark>
                  <v-card-text>-</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 md11>

          <v-card color="blue lighten-2" dark>
            <router-link :to="'question/'+(questionIndex+1) ">
              <v-card-title>{{title}}</v-card-title>
              <v-card-text>{{ content }}</v-card-text>
            </router-link>
              <v-btn v-for="(tag,index) in tags" :key=index flat color="yellow">{{tag}}</v-btn>
              <v-card-text class="text-xs-right pt-4">asked by {{author}}</v-card-text>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['questionIndex'],
  data: function(){
    return {
      status: 'test',
    }
  },
  computed:{
    counter() {
      return this.$store.state.count
    },
    title() {
      return this.$store.state.questions[this.questionIndex+1].title
    },
    votes() {
      return this.$store.state.questions[this.questionIndex+1].votes
    },
    content() {
      return this.$store.state.questions[this.questionIndex+1].content
    },
    author() {
      return this.$store.state.questions[this.questionIndex+1].author
    },
    tags() {
      return this.$store.state.questions[this.questionIndex+1].tags
    }
  },
  methods:{
    ...mapActions([
      'upvote',
      'downvote'
    ]),
    validate(){
      console.log("validate")
    }
  }

}
</script>

<style>
</style>

