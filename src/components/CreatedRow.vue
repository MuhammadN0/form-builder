<template>
  <div class="p-10 bg-slate-50 rounded-xl m-auto flex mb-3 gap-4 items-start">
    <template v-if="schema[secIndex][index].type !== 'heading'">
      <CreatedShortAnswer
        v-if="
          schema[secIndex][index]?.type === 'textarea' ||
          schema[secIndex][index]?.type === 'text' ||
          schema[secIndex][index]?.type === 'date'
        "
        :index="index"
        :secIndex="secIndex"
      />
      <CreatedMultipleChoice
        v-if="schema[secIndex][index]?.type === 'mcq'"
        :index="index"
        :secIndex="secIndex"
      />
      <!-- <SelectQuestionType :index="index" :secIndex="secIndex" /> -->
      <div class="flex items-center gap-1">
        <input
          type="checkbox"
          value="1"
          :id="'required' + '-' + secIndex + '-' + index"
          v-model="req"
        />
        <label :for="'required' + '-' + secIndex + '-' + index">Required</label>
      </div>
    </template>
    <HeadingRow
      :secIndex="secIndex"
      :index="index"
      v-if="schema[secIndex][index]?.type === 'heading'"
    />
    <button
      @click="handleRemove"
      class="justify-self-end bg-slate-500 text-slate-50 px-2 py-1 rounded-full"
    >
      Remove
    </button>
  </div>
</template>

<script setup>
// import SelectQuestionType from './SelectQuestionType.vue'
import CreatedShortAnswer from './CreatedShortAnswer.vue'
import CreatedMultipleChoice from './CreatedMultipleChoice.vue'
import HeadingRow from './HeadingRow.vue'
import { ref, watch } from 'vue'
import useCustomSchema from '@/composibles/useCustomSchema'
const {
  schema: { value: schema },
  updateRow,
  removeWithIndex
} = useCustomSchema()
const { index, secIndex } = defineProps(['index', 'secIndex'])
const req = ref(schema[secIndex][index].required)
watch(req, (v) => updateRow(secIndex, index, { required: v }))
function handleRemove() {
  removeWithIndex(secIndex, index)
}
</script>
