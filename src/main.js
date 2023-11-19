import { createApp } from 'vue'
import App from './App.vue'
import route from './Router'

var app = createApp(App).use(route)
app.mount('#app');
