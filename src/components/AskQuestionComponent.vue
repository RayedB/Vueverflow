<template>
  <v-container>
    <h1>Ask a question</h1>
    <v-form >
        <v-text-field
            v-model="title"
            label="Title"
            required
          ></v-text-field>
          {{title}}
        <v-textarea
            outline
            v-model="content"
            label="Body"
            required
          ></v-textarea>
    </v-form>
  {{tags}}
  <v-btn
      color="success"
      @click="validate"
    >
      Validate
    </v-btn>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data: () => {
    return {
      title : '',
      content: ''
    }
  },
  computed: {
    ...mapGetters([
      'tags'
    ])
  },
  methods: {
    validate: () => {
      console.log("title")
    }
  }
}
</script>
<style>

</style>
