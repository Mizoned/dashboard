import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import directives from '@/directives';
import icons from '@/components/icons';
import uiComponents from '@/components/UI';
import components from '@/components';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import '@/assets/styles/main.scss';
import 'normalize.css';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const app = createApp(App);

directives.forEach((directive) => {
	app.directive(directive.name, directive);
});

icons.forEach((icon) => {
	app.component(icon.name, icon);
});

components.forEach((component) => {
	app.component(component.name, component);
});

uiComponents.forEach((component) => {
	app.component(component.name, component);
});

const toastOptions = {
	position: 'bottom-center',
	timeout: 3000,
	draggable: true,
	draggablePercent: 0.7,
	pauseOnHover: true,
	showCloseButtonOnHover: false,
	hideProgressBar: true,
	closeButton: false,
	icon: true,
	transition: 'Vue-Toastification__bounce',
	maxToasts: 5,
	newestOnTop: true
};

app.use(store).use(router).use(Toast, toastOptions);

app.mount('#app');
