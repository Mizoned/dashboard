import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles/main.scss';
import 'normalize.css';

const app = createApp(App);

app
    .use(store)
    .use(router)
    .mount('#app');
