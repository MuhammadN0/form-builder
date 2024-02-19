<template>
  <div class="h-dvh bg-slate-200 p-10">
    <h1>Create your form</h1>
    <div class="border-2 border-gray-800 p-10 mb-5 rounded-lg flex gap-4">
      <button class="bg-slate-500 text-slate-50 px-2 py-1 rounded-full" @click="handleText">
        Add a text input
      </button>
      <input v-model="textLabel" type="text" />
      <button class="bg-slate-500 text-slate-50 px-2 py-1 rounded-full" @click="handleNumber">
        Add a number input
      </button>
      <input v-model="numberLabel" type="text" />
      <button class="bg-slate-500 text-slate-50 px-2 py-1 rounded-full" @click="handlePassword">
        Add a password input
      </button>
      <input v-model="passwordLabel" type="text" />
    </div>
    <h2>Preview Form:</h2>
    <div class="border-2 border-gray-800 p-10 rounded-lg">
      <SchemaForm
        :preventModelCleanupOnSchemaChange="true"
        schemaRowClasses="flex"
        @submit="submitHandler"
        :schema="mySchema"
      >
        <template v-slot:afterForm>
          <button>Submit</button>
        </template>
      </SchemaForm>
    </div>
    <div class="flex justify-end">
      <button class="bg-slate-500 px-2 py-1 rounded-full mt-5 text-gray-50">Submit</button>
    </div>
  </div>
</template>

<script setup>
import { SchemaForm, useSchemaForm } from 'formvuelate'
import { markRaw, ref } from 'vue'
import FormRow from '@/components/FormRow.vue'
const formModel = ref({
  first: {
    second: {
      third: {
        value: 'hi'
      }
    }
  }
})
const textLabel = ref('')
const numberLabel = ref('')
const passwordLabel = ref('')
useSchemaForm(formModel)
markRaw(FormRow)
const mySchema = ref({})
function handleText() {
  mySchema.value[textLabel.value.toLowerCase()] = {
    component: FormRow,
    label: textLabel.value,
    type: 'text',
    condition: (a) => {
      console.log(a)
      return true
    }
  }
  textLabel.value = ''
}
function handleNumber() {
  mySchema.value[numberLabel.value.toLowerCase()] = {
    component: FormRow,
    label: numberLabel.value,
    type: 'number'
  }
  numberLabel.value = ''
}
function handlePassword() {
  mySchema.value[passwordLabel.value.toLowerCase()] = {
    component: FormRow,
    label: passwordLabel.value,
    type: 'password'
  }
  passwordLabel.value = ''
}
function submitHandler(e) {
  const values = [...e.target].map((el) => el.value)
  console.log('Hello', values)
  console.log([...e.target])
}
</script>
