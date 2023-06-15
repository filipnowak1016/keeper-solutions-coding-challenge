import { createApp } from "vue/dist/vue.esm-bundler"
import App from './App.vue'

// Vuetify
import { vuetify } from './vuetify'

// Router
import { router } from './router'

// Vuex
import { store } from './store'

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .mount('#app')
