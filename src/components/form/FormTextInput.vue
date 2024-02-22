<template>
  <div class="bg-slate-50 rounded-lg p-4 grid grid-cols-3">
    <label class="">{{ label }}</label>
    <Field :name="label" class="border border-slate-800 rounded-full" type="text" />
    <ErrorMessage :name="label" />
  </div>
</template>

<script setup>
import {Field,ErrorMessage} from 'vee-validate'
const { label } = defineProps(['label'])
</script>
