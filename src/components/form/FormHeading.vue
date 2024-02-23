<template>
  <div class="bg-slate-50 rounded-lg p-4">

    <h1 class="text-xl font-bold">
      {{heading}}
    </h1>
    <p class="text-sm text-slate-400">{{ desc }}</p>
  </div>
</template>


<script setup>
  const {heading,desc} = defineProps(['heading','desc'])
</script>