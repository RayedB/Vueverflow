<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>


