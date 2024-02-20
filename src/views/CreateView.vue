<template>
  <div class="bg-slate-200 flex flex-col items-center gap-10 min-h-dvh">
    <h2>Create your form with our service</h2>
    <div class="flex gap-2">
      <div>
        <!-- V-for -->
        <div class="section py-5" v-for="(section, i) in schemaStore.schema" :key="i">
          <div v-for="(item, index) in section" :key="i.toString() + '+' + index.toString()">
            <CreatedRow :index="index" :secIndex="i" />
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center gap-3 self-end bg-slate-100 rounded border p-2 border-slate-800"
      >
        <!-- Controls -->
        <button
          class="flex items-center justify-center aspect-square bg-gray-50 font-bold px-3 border border-gray-800 rounded-full"
          @click="schemaStore.addNewRow"
        >
          +
        </button>
        <button
          class="flex items-center justify-center aspect-square bg-gray-50 font-bold px-3 border border-gray-800 rounded-full"
          @click="schemaStore.addNewHeading"
        >
          T
        </button>
        <button
          class="flex items-center justify-center aspect-square bg-gray-50 font-bold px-3 border border-gray-800 rounded-full"
          @click="schemaStore.addNewSection"
        >
          S
        </button>
        <button
          class="flex items-center justify-center aspect-square bg-gray-50 font-bold px-3 border border-gray-800 rounded-full"
          @click="schemaStore.removeLast"
        >
          -
        </button>
      </div>
    </div>
    <button @click="handlePreview" class="bg-slate-500 rounded-full px-2 py-1 text-slate-50">Preview Form</button>
  </div>
</template>

<script setup>
import CreatedRow from '@/components/CreatedRow.vue'
import useSchemaStore from '@/stores/schema'
import { useRouter } from 'vue-router';
const router = useRouter()
const schemaStore = useSchemaStore()
function handlePreview(){
  schemaStore.getSchemaWizardSchema();
  router.push({name:'preview'})
}
</script>
