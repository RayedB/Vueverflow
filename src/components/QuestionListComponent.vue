<template>
  <v-container fluid>
    <v-flex xs12>
      <v-layout align-center justify-space-between row>
        <h1>Questions </h1>
        <div>
          <v-btn small color="primary">Poser une question</v-btn>
        </div>
      </v-layout>
      <v-layout row>
        <p>Lorem ipsum JavaScript (not to be confused with Java) is a high-level, dynamic, multi-paradigm, object-oriented, prototype-based, weakly-typed language used for both client-side and server-side scripting. Its primary use is in rendering and performing manipulation of web pages. Use this tag for questions regarding ECMAScript and its various dialects/implementations (excluding ActionScript and Google-Apps-Script).</p>
      </v-layout>
      <v-layout row class="question-container" v-for="(n, index) in numberOfQuestions">
        {{index}}
        <app-question></app-question>
      </v-layout>
      <!-- <v-layout row class="question-container">
        <app-question></app-question>
      </v-layout>
      <v-layout row class="question-container">
        <app-question></app-question>
      </v-layout> -->


    </v-flex>
  </v-container>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: function(){
    return {
      status: 'test'
    }
  },
  computed: {
    ...mapGetters([
      'numberOfQuestions'
    ])
  }

}
</script>

<style>

  .question-container{
    border-top: solid 1px black;
  }

</style>

