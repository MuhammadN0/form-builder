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
      <SelectQuestionType :index="index" :secIndex="secIndex" />
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
  </div>
</template>

<script setup>
import SelectQuestionType from './SelectQuestionType.vue'
import CreatedShortAnswer from './CreatedShortAnswer.vue'
import CreatedMultipleChoice from './CreatedMultipleChoice.vue'
import useSchemaStore from '@/stores/schema'
import HeadingRow from './HeadingRow.vue'
import { ref, watch, computed } from 'vue'
import useCustomSchema from '@/composibles/useCustomSchema'
const {
  schema: { value: schema },
  updateRow
} = useCustomSchema()
const { index, secIndex } = defineProps(['index', 'secIndex'])
const req = ref(false)
watch(req, (v) => updateRow(secIndex, index, { required: v }))
</script>
