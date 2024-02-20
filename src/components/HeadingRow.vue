<template>
  <div>
    <div class="flex gap-5 mb-3">
      <label for="heading">Enter your heading</label>
      <input
        id="heading"
        type="text"
        class="border rounded border-slate-800"
        placeholder="Enter your heading"
        @input="handleUpdateHeading"
      />
    </div>
    <div class="flex gap-5">
      <label for="desc">Enter your description</label>
      <input
        id="desc"
        type="text"
        class="border rounded border-slate-800"
        placeholder="Enter your description"
        @input="handleUpdateDesc"
      />
    </div>
  </div>
</template>

<script setup>
import useSchemaStore from '@/stores/schema'
const schemaStore = useSchemaStore()
const { index, secIndex } = defineProps(['index', 'secIndex'])
function handleUpdateDesc(e) {
  schemaStore.updateRow(secIndex, index, { desc: e.target.value })
}
function handleUpdateHeading(e) {
  schemaStore.updateRow(secIndex, index, { value: e.target.value })
}
</script>
