import { ref,computed } from 'vue'

const schema = ref([
  [
    {
      type: 'heading',
      value: '',
      model: '',
      id: Date.now().toString()
    }
  ]
])
const schemaWizardSchema = computed(() => schema.value.map((section) => {
  if (!section.length) return
  return section.map((question) => {
    if (question.type === 'heading') {
      return {
        value: question.value,
        desc: question.desc,
        model: question.value + question.desc,
        component: 'FormHeading'
      }
    } else if (question.type === 'mcq') {
      return {
        component: 'FormMCQ',
        label: question.label,
        answers: question.answers,
        model: question.model,
        required: question.required,
        id: question.id
      }
    } else if (question.type === 'textarea') {
      return {
        component: 'FormTextarea',
        label: question.value,
        model: question.model,
        required: question.required,
        id: question.id
      }
    } else {
      return {
        component: 'FormTextInput',
        label: question.value,
        model: question.model,
        required: question.required,
        id: question.id
      }
    }
  })
}))
const currentArray = ref(0)
function addNewRow() {
  if (!schema.value[currentArray.value]) {
    schema.value[currentArray.value] = []
  }
  schema.value[currentArray.value].push({
    type: 'text',
    value: '',
    model: '',
    required: false,
    id: Date.now().toString()
  })
}
function updateRow(_currentArray, index, data) {
  schema.value[_currentArray][index] = {
    ...schema.value[_currentArray][index],
    ...data,
    model: data.model ? data.model : schema.value[_currentArray][index].model
  }
  if (data?.type === 'mcq') {
    schema.value[_currentArray][index] = {
      ...schema.value[_currentArray][index],
      answers: [{ isCorrect: false, value: '' }]
    }
  }
}
function addNewHeading() {
  schema.value[currentArray.value].push({
    type: 'heading',
    value: '',
    model: '',
    id: Date.now().toString()
  })
}
function addNewSection() {
  if (!schema.value[currentArray.value]?.length) return
  currentArray.value++
  schema.value.push([])
}
function removeLast() {
  if (!schema.value[currentArray.value].length) {
    if (currentArray.value === 0) return
    schema.value.pop()
    currentArray.value = currentArray.value === 0 ? 0 : currentArray.value - 1
    this.removeLast()
  } else {
    schema.value[currentArray.value].pop()
    if (!schema.value[currentArray.value].length) {
      if (currentArray.value === 0) return
      currentArray.value = currentArray.value - 1
      schema.value.pop()
    }
  }
}
function updateSchema(_schema) {
  schema.value = _schema
}
function removeWithIndex(secIndex, index) {
  schema.value[secIndex].splice(index, 1)
}
function removeSection() {
  schema.value.pop()
  currentArray.value--
}
/*
function getSchemaWizardSchema() {
  schemaWizardSchema.value = schema.value.map((section) => {
    if (!section.length) return
    return section.map((question) => {
      if (question.type === 'heading') {
        return {
          value: question.value,
          desc: question.desc,
          model: question.value + question.desc,
          component: 'FormHeading'
        }
      } else if (question.type === 'mcq') {
        return {
          component: 'FormMCQ',
          label: question.label,
          answers: question.answers,
          model: question.model,
          required: question.required,
          id: question.id
        }
      } else if (question.type === 'textarea') {
        return {
          component: 'FormTextarea',
          label: question.value,
          model: question.model,
          required: question.required,
          id: question.id
        }
      } else {
        return {
          component: 'FormTextInput',
          label: question.value,
          model: question.model,
          required: question.required,
          id: question.id
        }
      }
    })
  })
}
*/
export default function useCustomSchema() {
  return {
    schema,
    schemaWizardSchema,
    updateSchema,
    //getSchemaWizardSchema,
    removeLast,
    addNewRow,
    addNewHeading,
    addNewSection,
    updateRow,
    removeWithIndex,
    removeSection
  }
}
