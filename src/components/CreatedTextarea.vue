<template>
  <div>
    <textarea
      type="text"
      class="border rounded border-slate-800 resize-none"
      placeholder="Enter your question"
      @input="handleChangeQuestion"
    ></textarea>
  </div>
</template>

<script setup>
import useSchemaStore from '@/stores/schema'
const schemaStore = useSchemaStore()
const { index, secIndex } = defineProps(['index', 'secIndex'])
function handleChangeQuestion(e) {
  const model = e.target.value.toLowerCase().split(' ').join('-')
  schemaStore.updateRow(secIndex, index, {
    value: e.target.value,
    model,
  })
}
</script>
