<template>
  <div class="bg-slate-50 rounded-lg p-4 grid grid-cols-3">
    <label class="">{{ label }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :name="label"
      class="border border-slate-800 rounded-full"
      type="text"
    />
  </div>
</template>

<script setup>
const { label,modelValue } = defineProps(['label','modelValue'])
</script>
