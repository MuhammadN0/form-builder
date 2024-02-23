<template>
  <div>
    <input
      type="text"
      class="border rounded border-slate-800"
      placeholder="Enter your question"
      v-model="question"
      @input="handleChangeQuestion"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useCustomSchema from '@/composibles/useCustomSchema'
const { updateRow, schema } = useCustomSchema()
const { index, secIndex } = defineProps(['index', 'secIndex'])
const question = ref(schema.value[secIndex][index].label)
function handleChangeQuestion(e) {
  const model = e.target.value.toLowerCase().split(' ').join('-')
  updateRow(secIndex, index, {
    label: e.target.value,
    model
  })
}
</script>
