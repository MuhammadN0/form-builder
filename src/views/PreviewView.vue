<template>
  <SchemaWizard :schema="schemaWizardSchema" :step="step">
    <template v-slot:afterForm>
      <button v-if="step > 0" @click="step--">Back</button>
      <button v-if="step < 1" @click="step++">Next</button>
    </template>
  </SchemaWizard>

</template>

<script setup>
import { ref } from "vue";
import { SchemaWizard, useSchemaForm } from "formvuelate";
import useCustomSchema from "@/composibles/useCustomSchema";
const step = ref(0);
const formModel = ref({});
useSchemaForm(formModel)
const {schemaWizardSchema} = useCustomSchema()
</script>