<template>
  <div>
    <div class="flex gap-5 mb-3">
      <label :for="'heading' + secIndex + '-' + index">Enter your heading</label>
      <input
        :id="'heading' + secIndex + '-' + index"
        type="text"
        class="border rounded border-slate-800"
        placeholder="Enter your heading"
        v-model="heading"
        @input="handleUpdateHeading"
      />
    </div>
    <div class="flex gap-5">
      <label :for="'desc' + secIndex + '-' + index">Enter your description</label>
      <input
        :id="'desc' + secIndex + '-' + index"
        type="text"
        class="border rounded border-slate-800"
        placeholder="Enter your description"
        v-model="desc"
        @input="handleUpdateDesc"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useCustomSchema from '@/composibles/useCustomSchema'
const { updateRow, schema } = useCustomSchema()
const { index, secIndex } = defineProps(['index', 'secIndex'])
const heading = ref(schema.value[secIndex][index].heading)
const desc = ref(schema.value[secIndex][index].desc)
function handleUpdateDesc(e) {
  updateRow(secIndex, index, { desc: e.target.value })
}
function handleUpdateHeading(e) {
  updateRow(secIndex, index, { heading: e.target.value })
}
</script>
