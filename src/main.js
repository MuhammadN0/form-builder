import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import FormHeading from './components/form/FormHeading.vue'
import FormTextarea from './components/form/FormTextarea.vue'
import FormTextInput from './components/form/FormTextInput.vue'
import FormMCQ from './components/form/FormMCQ.vue'

const app = createApp(App)
app.component('FormHeading', FormHeading)
app.component('FormTextarea', FormTextarea)
app.component('FormTextInput', FormTextInput)
app.component('FormMCQ', FormMCQ)
app.use(createPinia())
app.use(router)
app.mount('#app')