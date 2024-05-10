<template>
  <form
      enctype="multipart/form-data"
      class="max-w-[500px] bg-blue-300 pt-5 mx-auto flex flex-col gap-4 border rounded-xl px-4 py-2"
      @submit.prevent="$emit('formSubmit')">
    <slot/>
  </form>
</template>

<script>
export default {
  name: "vForm"
}
</script>

<style scoped>

</style>