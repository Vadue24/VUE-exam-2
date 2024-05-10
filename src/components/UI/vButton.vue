<template>
  <button
      class=" border bg-blue-500 rounded-lg border-gray px-4 py-2">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "vButton",
  props: ['text']
}
</script>

<style scoped>

</style>