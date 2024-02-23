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
    },
  ]
])

const currentArray = ref(0)

function updateRow(secIndex, index, data) {
  schema.value[secIndex][index] = {
    ...schema.value[secIndex][index],
    ...data,
  }
  if (data?.type === 'mcq') {
    schema.value[secIndex][index] = {
      ...schema.value[secIndex][index],
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
