<template>
  <header class="flex justify-center items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600">
    <div class="flex items-center gap-4">
      <div>
        <img class="rounded-full w-24 h-24 border-4 border-gray-400" :src="'https://test.ai-softdev.com/'+getCurrentUser?.avatar" alt="Profile Picture">
      </div>
      <div class="text-white">
        <router-link :to="{name:'profile_page'}" class="text-lg font-semibold">{{ getCurrentUser?.email }}</router-link>
      </div>
      <div>
        <router-link @click="logoutUser()" :to="{name:'login_page'}" class="text-white hover:underline">Logout</router-link>
      </div>
    </div>
  </header>
</template>


<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "vHeader",
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  methods: {
    ...mapActions(['logoutUser'])
  },
}
</script>

<style scoped>

</style>