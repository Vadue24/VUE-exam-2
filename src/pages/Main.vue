<template>
  <div>
    <v-header />
    <router-view />
  </div>
</template>

<script>
import VHeader from '../components/vHeader.vue'
export default {
  name: "Main",
  components: { VHeader },
}
</script>

<style scoped></style>