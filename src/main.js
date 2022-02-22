import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import 'tw-elements'
/*import 'pretty-checkbox/src/pretty-checkbox.scss'*/

createApp(App).use(store).use(router).mount('#app')
