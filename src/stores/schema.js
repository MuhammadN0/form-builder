import { defineStore } from 'pinia'

export default defineStore('schema', {
  state: () => ({
    currentArray: 0,
    schema: [
      [
        {
          type: 'heading',
          value: '',
          model: ''
        }
      ]
    ],
    schemaWizardSchema: []
  }),
  actions: {
    addNewRow() {
      this.schema[this.currentArray].push({ type: 'text', value: '', model: '', required: false })
    },
    updateRow(_currentArray, index, data) {
      this.schema[_currentArray][index] = {
        ...this.schema[_currentArray][index],
        ...data,
        model: data.model ? data.model : this.schema[_currentArray][index].model
      }
    },
    addNewHeading() {
      this.schema[this.currentArray].push({ type: 'heading', value: '', model: '' })
    },
    addNewSection() {
      this.currentArray++
      this.schema.push([])
    },
    removeLast() {
      if (!this.schema[this.currentArray].length) {
        if (this.currentArray === 0) return
        this.schema.pop()
        this.currentArray = this.currentArray === 0 ? 0 : this.currentArray - 1
        this.removeLast()
      } else {
        this.schema[this.currentArray].pop()
        if (!this.schema[this.currentArray].length) {
          if (this.currentArray === 0) return
          this.currentArray = this.currentArray - 1
          this.schema.pop()
        }
      }
    },
    getSchemaWizardSchema() {
      this.schemaWizardSchema = this.schema.map((section) => {
        return section.map((question) => {
          if(question.type === 'heading'){
            return {
              heading: question.value,
              desc: question.desc,
              component: 'FormHeading',
            }
          } else if (question.type === 'mcq') {
            return {
              component: 'FormMCQ',
              label: question.label,
              answers: question.answers,
              model: question.model,
              required: question.required
            }
          } else if (question.type === 'textarea') {
            return {
              component: 'FormTextarea',
              label: question.value,
              model: question.model,
              required: question.required
            }
          } else {
            return {
              component: 'FormTextInput',
              label: question.value,
              model: question.model,
              required: question.required
            }
          }
        })
      })
    }
  }
})
/*
[
  [
    { type: 'heading', value: 'Heading', model: '', desc: 'This is a desc' },
    { type: 'text', value: 'Short Answer 1', model: 'short-answer-1', required: true },
    { type: 'textarea', value: 'Write a paragraph', model: 'write-a-paragraph' },
    {
      type: 'mcq',
      value: 'Which choice is correct?',
      model: 'which-choice-is-correct?',
      answers: [
        { label: 'Choice 1', value: 'choice-1', isCorrect: true },
        { isCorrect: false, label: 'Choice 2', value: 'choice-2' },
        { isCorrect: false, label: 'Choice 3', value: 'choice-3' },
        { isCorrect: false, label: 'Choice 4', value: 'choice-4' }
      ]
    },
    { type: 'text', value: 'Short Answer 2', model: 'short-answer-2' },
    { type: 'date', value: 'Date of today', model: 'date-of-today' }
  ]
]
*/
