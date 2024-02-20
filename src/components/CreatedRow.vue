<template>
  <div class="p-10 bg-slate-50 rounded-xl m-auto flex mb-3 gap-4 items-start">
    <template v-if="schema[secIndex][index].type !== 'heading'">
      <CreatedShortAnswer v-if="shortAnswerCondition" :index="index" :secIndex="secIndex" />
      <CreatedMultipleChoice
        v-if="schema[secIndex][index].type === 'mcq'"
        :index="index"
        :secIndex="secIndex"
      />
      <SelectQuestionType :index="index" :secIndex="secIndex" />
      <div class="flex items-center gap-1">
        <input type="checkbox" value="1" :id="'required'+'-'+secIndex+'-'+index" v-model="req" />
        <label :for="'required'+'-'+secIndex+'-'+index">Required</label>
      </div>
    </template>
    <HeadingRow :secIndex="secIndex" :index="index" v-else />
  </div>
</template>

<script setup>
import SelectQuestionType from './SelectQuestionType.vue'
import CreatedShortAnswer from './CreatedShortAnswer.vue'
import CreatedMultipleChoice from './CreatedMultipleChoice.vue'
import useSchemaStore from '@/stores/schema'
import HeadingRow from './HeadingRow.vue'
import { ref, watch, computed } from 'vue'
const { schema, currentArray, updateRow } = useSchemaStore()
const { index, secIndex } = defineProps(['index', 'secIndex'])
const req = ref('')
watch(req, (v) => updateRow(currentArray, index, { required: v }))
const shortAnswerCondition = computed(
  () =>
    schema[secIndex][index].type === 'textarea' ||
    schema[secIndex][index].type === 'text' ||
    schema[secIndex][index].type === 'date'
)
</script>
