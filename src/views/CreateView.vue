<template>
  <div class="bg-slate-200 flex flex-col items-center gap-10 min-h-dvh">
    <h2>Create your form with our service</h2>
    <div class="grid grid-cols-12 gap-20">
      <div class="col-span-3 relative">
        <draggable
          v-model="questionModels"
          :group="{ name: 'questions', pull: 'clone', put: false }"
          item-key="id"
          :clone="handleClone"
          class="sticky top-2"
        >
          <template #item="{ element }">
            <div class="p-10 bg-slate-50 rounded-xl m-auto flex mb-3 gap-4 items-start cursor-move">
              {{ element.label }}
            </div>
          </template>
        </draggable>
      </div>
      <div class="flex gap-2 col-span-9">
        <div>
          <div
            class="section py-5 border-4 border-dashed border-gray-800 rounded-lg relative pt-4 pb-12 px-4 mb-3"
            v-for="(section, i) in schema"
            :key="i"
          >
            <draggable v-model="schema[i]" item-key="id" group="questions">
              <template #item="{ index }">
                <div :key="index" class="cursor-move">
                  <CreatedRow :index="index" :secIndex="i" :key="i + '+' + index" />
                  <!-- v-for="(item, index) in section" :key="i+'+'+index" -->
                </div>
              </template>
            </draggable>
          </div>
        </div>
        <button
          class="flex flex-col items-center gap-3 self-end bg-slate-100 rounded-full border p-2 border-slate-800"
          @click="addNewSection"
        >
          New section
        </button>
        <button
          v-if="schema.length > 1"
          @click="removeSection"
          class="flex flex-col items-center gap-3 self-end bg-slate-100 rounded-full border p-2 border-slate-800"
        >
          Remove section
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
const { schema, removeSection, addNewSection } = useCustomSchema()
function handlePreview() {
  //getSchemaWizardSchema()
  router.push({ name: 'preview' })
}
const questionModels = ref([
  { type: 'text', label: 'Text Input' },
  { type: 'checkbox', label: 'CheckBoxes' },
  { type: 'textarea', label: 'Long Text' },
  { type: 'mcq', label: 'Multible choice' },
  { type: 'heading', label: 'Heading' }
])
function handleClone(e) {
  return e.type === 'heading'
    ? {
        component: 'FormHeading',
        heading: '',
        desc: '',
        model:'',
        type: 'heading',
        id: Date.now()
      }
    : e.type === 'mcq'
      ? {
          component: 'FormMCQ',
          type: e.type,
          label: '',
          isRequired: false,
          model: '',
          id: Date.now(),
          answers: [{ label: '', isCorrect: false }]
        }
      : e.type === 'text'
        ? {
            component: 'FormTextInput',
            type: e.type,
            label: '',
            isRequired: false,
            model: '',
            id: Date.now()
          }
        : {
            component: 'FormTextarea',
            type: e.type,
            label: '',
            isRequired: false,
            model: '',
            id: Date.now()
          }
}
</script>
