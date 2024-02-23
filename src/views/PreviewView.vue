<template>
  <div class="bg-slate-200 items-center gap-10 min-h-dvh py-12 px-20">
    <Form>
      <SchemaWizard
        class="wrapper"
        useCustomFormWrapper
        :schema="schema"
        :step="step"
        @submit="handleSubmit"
      >
        <template v-slot:afterForm>
          <div class="flex flex-row justify-end gap-4 items-center">
            <template v-if="checkArrayHasElements(schema)">
              <button
                class="rounded px-2 py-1 text-slate-800 border-2 border-slate-800"
                v-if="step > 0"
                @click="step--"
              >
                Back
              </button>
              <button
                class="bg-slate-600 text-slate-50 rounded px-2 py-1"
                v-if="step < schema.length - 1"
                @click="step++"
              >
                Next
              </button>
            </template>
            <button
              class="bg-slate-600 text-slate-50 rounded px-2 py-1"
              type="submit"
              v-if="step === schema.length - 1"
            >
              Submit
            </button>
          </div>
        </template>
      </SchemaWizard>
    </Form>
    <RouterLink class="text-gray-50 bg-slate-700 px-5 py-1 rounded-full" :to="{ name: 'create' }"
      >Back to Edit</RouterLink
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SchemaWizard, useSchemaForm } from 'formvuelate'
import { Form } from 'vee-validate'
import { checkArrayHasElements } from '@/helpers'
import useCustomSchema from '@/composibles/useCustomSchema'
const step = ref(0)
const formModel = ref({})
useSchemaForm(formModel)
const { schema } = useCustomSchema()
function handleSubmit(values) {
  console.log(values)
}
</script>
