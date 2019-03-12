<template>
   <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex md2 sm6>
        <v-card>
          <v-img src="https://picsum.photos/400/400?image=1084"></v-img>
          <p>Answers: {{consultant(id).answers}}</p>
          <p>Questions: {{consultant(id).questions}}</p>
          <p>Comments: {{consultant(id).comments}}</p>
      </v-card>
      </v-flex>
      <v-flex md10 sm6 >
        <v-card>
          <h1>{{consultant(id).firstName}} {{consultant(id).lastName}}</h1>
          <p class="mt-1">{{consultant(id).position}}</p>
          <h3>Tags</h3>
          <v-btn flat color="blue" v-for="(tag,index) in consultant(id).tags" :key=index >{{tag}}</v-btn>

          <h3>Questions</h3>
          <v-card-text>Question 1</v-card-text>
          <v-card-text>Question 2</v-card-text>
          <h3>Answers</h3>
          <v-card-text>Answers 1</v-card-text>
          <v-card-text>Answers 2</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters([
      'consultant'
    ])
  }

}
</script>
<style>

</style>
