<template>
  <div>
    <select v-model="selected" default="text">
      <option value="text">Short answer question</option>
      <option value="textarea">Paragraph</option>
      <option value="mcq">Multible choice</option>
      <option value="check-boxes">Checkboxes</option>
      <option value="select">Drop down</option>
      <option value="date">Date</option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import useSchemaStore from '@/stores/schema'
const schemaStore = useSchemaStore()
const selected = ref('text')
const { index,secIndex } = defineProps(['index','secIndex'])
watch(selected, (value) => {
  schemaStore.schema[secIndex][index].type = value
})
</script>
