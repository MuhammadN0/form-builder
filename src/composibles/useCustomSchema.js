import { ref } from 'vue'

const schema = ref([
  [
    {
      component: 'FormHeading',
      heading: '',
      desc: '',
      model: '',
      type: 'heading',
      id: Date.now()
    }
  ]
])

const currentArray = ref(0)

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

function removeWithIndex(secIndex, index) {
  schema.value[secIndex].splice(index, 1)
}

function addNewSection() {
  if (!schema.value[currentArray.value]?.length) return
  currentArray.value++
  schema.value.push([])
}

function removeSection() {
  schema.value.pop()
  currentArray.value--
}

export default function useCustomSchema() {
  return {
    schema,
    addNewSection,
    updateRow,
    removeWithIndex,
    removeSection
  }
}
