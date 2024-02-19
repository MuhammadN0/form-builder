<template>
  <div>
    <label>{{ label }}</label>
    <input   :type="type || 'text'" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
  </div>
  </template>

<script setup>
const { modelValue,label,type } = defineProps(['modelValue','label','type'])
</script>
