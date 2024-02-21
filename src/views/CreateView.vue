<template>
  <div class="bg-slate-200 flex flex-col items-center gap-10 min-h-dvh">
    <h2>Create your form with our service</h2>
    <div class="flex gap-2">
      <div>
        <!-- V-for -->

        <div class="section py-5" v-for="(section, i) in schema" :key="i">
          <draggable v-model="schema[i]" group="questions" item-key="id" @end="_updateSchema">
            <template #item="{ index }">
              <div :key="index">
                <CreatedRow :index="index" :secIndex="i" :key="i+'+'+index" />
                <!-- v-for="(item, index) in section" :key="i+'+'+index" -->
              </div>
            </template>
          </draggable>
        </div>
      </div>
      <div
        class="flex flex-col items-center gap-3 self-end bg-slate-100 rounded-full border p-2 border-slate-800"
      >
        <!-- Controls -->
        <button
          class="flex items-center justify-center aspect-square bg-gray-50 font-bold px-3 border border-gray-800 rounded-full"
          @click="addNewRow"
        >
          +
        </button>
        <button
          class="flex items-center justify-center aspect-square bg-gray-50 font-bold px-3 border border-gray-800 rounded-full"
          @click="addNewHeading"
        >
          T
        </button>
        <button
          class="flex items-center justify-center aspect-square bg-gray-50 font-bold px-3 border border-gray-800 rounded-full"
          @click="addNewSection"
        >
          S
        </button>
        <button
          class="flex items-center justify-center aspect-square bg-gray-50 font-bold px-3 border border-gray-800 rounded-full"
          @click="removeLast"
        >
          -
        </button>
      </div>
    </div>
    <button @click="handlePreview" class="bg-slate-500 rounded-full px-2 py-1 text-slate-50">
      Preview Form
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CreatedRow from '@/components/CreatedRow.vue'
import useCustomSchema from '@/composibles/useCustomSchema'
import { useRouter } from 'vue-router'
import draggable from 'vuedraggable'
const router = useRouter()
const { schema, addNewHeading, addNewRow, addNewSection, getSchemaWizardSchema, removeLast,updateRow } =
  useCustomSchema()
function _updateSchema(e) {
  console.log(schema.value);
  updateRow(0,0,{})
}
function handlePreview() {
  getSchemaWizardSchema()
  router.push({ name: 'preview' })
}
</script>
