<template>
  <v-container fluid grid-list-md>
    <h1 class="mb-5">Consultants</h1>
    <v-layout row wrap>
      <v-flex md3 sm6 xs12 v-for="(consultant,index) in consultants" :key=index d-flex>
        <v-card class="mb-5" :to="'/user/'+index">
        <v-avatar size="130" class="mx-auto d-block"> <img src="https://picsum.photos/200/300"></v-avatar>
        <v-card-text class="text-xs-center py-0 title">{{consultant.firstName}} {{consultant.lastName}}</v-card-text>
        <v-card-text>{{consultant.position}}</v-card-text>
        <v-card-text><v-icon>contact_support</v-icon>questions: {{consultant.questions}}</v-card-text>
        <v-card-text><v-icon>assignment</v-icon>answers: {{consultant.answers}}</v-card-text>
        <v-card-text><v-icon>comment</v-icon>comment:: {{consultant.comments}}</v-card-text>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'consultants'
    ])
  }
}
</script>
<style>
 img{
   transform: translate(0,-30px)
 }

</style>
