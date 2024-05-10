<template>
  <h1 class="text-center text-2xl mb-5 text-white">Login in your Account</h1>
  <form @submit.prevent="login(loginForm)"
    class="pt-5 bg-gradient-to-r from-yellow-500 to-indigo-300 max-w-[550px] mx-auto flex flex-col gap-4 border rounded-xl px-8 py-6">
    <input v-model="loginForm.email" type="text" placeholder="Email"
      class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500">
    <input v-model="loginForm.password" type="password" placeholder="Password"
      class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500">
    <button type="submit"
      class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors">Authorize</button>
  </form>
  <div class="text-center mt-4">
    <span class="text-gray-900">No account?</span> <router-link :to="{ name: 'register_page' }"
      class="text-indigo-500 font-semibold">Registration</router-link>
  </div>
</template>


<script>

import { mapActions } from "vuex";

export default {
  name: "Login",
  methods: {
    ...mapActions(['login'])
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
      loginForm: {
        email: '',
        password: '',
      }
    }
  },
}
</script>

<style scoped></style>