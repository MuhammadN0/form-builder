<template>
  <SchemaWizard :schema="schema" :step="step">
    <template v-slot:afterForm>
      <button v-if="step > 0" @click="step--">Back</button>
      <button v-if="step < 1" @click="step++">Next</button>
    </template>
  </SchemaWizard>

</template>

<script setup>
import { ref } from "vue";
import { SchemaWizard, useSchemaForm } from "formvuelate";
import useSchemaStore from '@/stores/schema'
const schemaStore = useSchemaStore();
const step = ref(0);
const formModel = ref({});
useSchemaForm(formModel)
const schema = ref(schemaStore.schemaWizardSchema)
</script>