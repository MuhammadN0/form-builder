<template>
  <div>
    <input
      type="text"
      class="border rounded border-slate-800"
      placeholder="Enter your short question"
      @input="handleChangeQuestion"
      :value="schema[secIndex][index].value"
    />
  </div>
</template>

<script setup>
import useCustomSchema from '@/composibles/useCustomSchema'
import useSchemaStore from '@/stores/schema'
const { updateRow, schema } = useCustomSchema()
const { index, secIndex } = defineProps(['index', 'secIndex'])
function handleChangeQuestion(e) {
  const model = e.target.value.toLowerCase().split(' ').join('-')
  updateRow(secIndex, index, {
    value: e.target.value,
    model
  })
}
</script>
