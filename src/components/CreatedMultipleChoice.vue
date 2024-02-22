<template>
  <div class="flex flex-col items-start gap-2">
    <input
      type="text"
      class="border rounded border-slate-800"
      placeholder="Enter your mcq question"
      @input="handleChangeQuestion"
      v-model="question"
    />
    <div v-for="(answer, ind) in answers" :key="ind" class="flex gap-3">
      <input type="radio" disabled />
      <input
        type="text"
        class="border rounded border-slate-800"
        placeholder="Add your answer"
        @input="handleChangeAnswer($event, ind)"
        :value="schema[secIndex][index].answers[ind].label"
      />
      <div>
        <input type="checkbox" value="1" @input="handleCorrectAnswer($event, ind)" />
        <label>Correct answer</label>
      </div>
    </div>
    <button
      @click="answers.push({ value: '', isCorrect: false })"
      class="bg-slate-400 rounded-full text-slate-50 px-2 py-1"
    >
      Add another answer
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import useCustomSchema from '@/composibles/useCustomSchema'
const {
  updateRow,
  schema: { value: schema }
} = useCustomSchema()
const { index, secIndex } = defineProps(['index', 'secIndex'])
const question = ref(schema[secIndex][index].label)
const answers = ref(schema[secIndex][index].answers)
function handleChangeQuestion(e) {
  const model = e.target.value.toLowerCase().split(' ').join('-')
  updateRow(secIndex, index, {
    label: e.target.value,
    model
  })
}
function handleChangeAnswer($event, ind) {
  const value = $event.target.value.toLowerCase().split(' ').join('-')
  answers.value[ind].label = $event.target.value
  answers.value[ind].value = value
}
function handleCorrectAnswer($event, ind) {
  answers.value[ind].isCorrect = $event.target.checked
}
watch(answers.value, (val) => {
  updateRow(secIndex, index, { answers: val })
})
</script>
