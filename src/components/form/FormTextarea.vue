<template>
  <div class="bg-slate-50 rounded-lg p-4 grid grid-cols-3">
    <label>{{ label }}</label>
    <textarea class="resize-none border border-slate-800 "></textarea>
  </div>
</template>


<script setup>
  const {label} =defineProps(['label'])
</script>