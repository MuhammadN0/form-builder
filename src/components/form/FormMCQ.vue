<template>
  <div class="bg-slate-50 rounded-lg p-4">
    <label class="block mb-3">{{ label }}</label>

    <div v-for="(answer, ind) in answers" :key="answer.value" class="flex gap-3 items-center">
      <input type="radio" :name="label" :value="answer.value" :id="label + ind" />
      <label :for="label + ind">{{ answer.label }}</label>
    </div>
  </div>
</template>

<script setup>
const { label, answers } = defineProps(['label', 'answers'])
</script>
