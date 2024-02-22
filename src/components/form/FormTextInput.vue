<template>
  <div>
    <label>{{ label }}</label>
    <input type="text">
  </div>
</template>


<script setup>
  const {label} = defineProps(['label'])
</script>