<template>
  <div>
    <label>{{ label }}</label>
    <div v-for="answer in answers" :key="answer.value">
      <label>{{ answer.value }}</label> <input type="radio" :name="label" :value="answer.value">
    </div>
  </div>
</template>


<script setup>
  const {label,answers} = defineProps(['label','answers'])
</script>