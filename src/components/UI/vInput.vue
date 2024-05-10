<template>
  <input class="px-4 outline-none border border-blue-500 rounded-lg py-2 focus:border-blue-700" :type="type"
    :value="modelValue" @input="$emit('update:modelValue',
      type === 'file' ? $event.target.files[0] : $event.target.value)" :placeholder="placeholder">
</template>


<script>
export default {
  name: "vInput",
  props: ['placeholder', 'type', 'modelValue']
}
</script>

<style scoped></style>