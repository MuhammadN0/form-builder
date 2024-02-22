<template>
  <h1>
    {{value}}
  </h1>
  <p>{{ desc }}</p>
</template>


<script setup>
  const {value,desc} = defineProps(['value','desc'])
</script>