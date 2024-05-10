<template>
  <h1 class="text-center text-2xl text-white mb-5">Registrate New Account</h1>
  <form v-if="!registerForm.email_confirm" @submit.prevent="register(registerForm)"
    class="pt-5 bg-gradient-to-r from-yellow-500 to-indigo-300 max-w-[550px] mx-auto flex flex-col gap-4 border rounded-xl px-8 py-6">
    <input class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      v-model="registerForm.login" type="text" placeholder="login">
    <input class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      v-model="registerForm.email" type="email" placeholder="email">
    <input class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      v-model="registerForm.password" type="password" placeholder="password">
    <input class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      v-model="registerForm.password_confirmation" type="password" placeholder="password confirm">
    <button type="submit"
      class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors">Register</button>
  </form>
  <div class="text-center mt-4">
    <span class="text-gray-900">Already have account?</span> <router-link :to="{ name: 'login_page' }"
      class="text-indigo-500 font-semibold">Registration</router-link>
  </div>
</template>

<script>

import { mapActions } from "vuex";

export default {
  name: "Register",
  methods: {
    ...mapActions(['register'])
  },
  created() {
    if (localStorage.getItem('token')?.length > 0) {
      this.$router.push({
        name: 'main_page'
      })
    }
  },
  data() {
    return {
      email_code: '',
      registerForm: {
        login: '',
        email: '',
        password: '',
        password_confirmation: '',
        email_confirm: false
      }

    }
  }
}
</script>

<style scoped></style>