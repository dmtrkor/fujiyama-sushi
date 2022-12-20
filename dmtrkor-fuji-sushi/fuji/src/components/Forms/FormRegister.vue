<template>
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
  >
    <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
    ></v-text-field>
    <v-text-field
        v-model="password"
        :counter="10"
        :rules="passwordRules"
        label="Password"
        required
    ></v-text-field>

    <v-btn
        color="success"
        class="mr-4"
        @click="submit"
        event="submit"
    >
    Submit
    </v-btn>


  </v-form>
</template>

Name

<script>
import axios from "axios";

export default {
  data: () => ({
    valid: true,
    password: '',
    passwordRules: [
      v => !!v || 'Password required',
      v => (v && v.length <= 16) || 'password must be less than 16 characters',
      v => /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/g.test(v) || 'Password must be valid',

    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

  }),

  methods: {
    submit (){
      axios.post('https://639b47bf31877e43d6883cb2.mockapi.io/' +
          '/users',{

        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },

      })
          .then(res => {
            console.log(res)

          })

          .catch(err=> {
            console.log(err)
          })
    }
    }

}
</script>

<style scoped>

</style>