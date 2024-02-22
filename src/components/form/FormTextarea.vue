<template>
  <div>
    <label>{{ label }}</label>
    <textarea></textarea>
  </div>
</template>


<script setup>
  const {label} =defineProps(['label'])
</script>