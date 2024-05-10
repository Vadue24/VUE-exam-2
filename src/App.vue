<script>

import {mapActions} from "vuex";

export default {
  methods: {
    ...mapActions(['loadCurrentUser'])
  },
  created() {
    if (localStorage.getItem('token')?.length > 0) {
      this.loadCurrentUser()
    } else {
      this.$router.push({
        name: 'login_page'
      })
    }
  }
}

</script>

<template>
  <div class="bg-gradient-to-r from-orange-500 to-green-300 min-h-screen">
    <router-view/>
  </div>
</template>

<style></style>