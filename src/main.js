import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import directives from "@/directives";
import icons from '@/components/icons'

import '@/assets/styles/main.scss';
import 'normalize.css';

const app = createApp(App);

directives.forEach(directive => {
    app.directive(directive.name, directive);
});

icons.forEach(icon => {
    app.component(icon.name, icon);
});

app
    .use(store)
    .use(router)
    .mount('#app');
