import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import ShopView from '@/views/ShopView.vue';
import PromoteView from '@/views/PromoteView.vue';
import SettingsView from '@/views/SettingsView.vue';
import VProductCreateView from '@/views/product/VProductCreateView.vue';
import VProductDraftsView from '@/views/product/VProductDraftsView.vue';

const routes = [
	{
		path: '',
		name: 'Dashboard',
		component: DashboardLayout,
		children: [
			{
				path: '',
				name: 'Home',
				component: HomeView
			},
			{
				path: '/shop',
				name: 'Shop',
				component: ShopView
			},
			{
				path: '/promote',
				name: 'Promote',
				component: PromoteView
			},
			{
				path: '/account-settings',
				name: 'Account settings',
				component: SettingsView
			},
			{
				path: '/product-add',
				name: 'New product',
				component: VProductCreateView
			},
			{
				path: '/product-drafts',
				name: 'Drafts',
				component: VProductDraftsView
			}
		]
	},
	{
		path: '/sign-up',
		name: 'SignUp',
		component: () => import('../views/SignUp.vue')
	},
	{
		path: '/sign-in',
		name: 'SignIn',
		component: () => import('../views/SignIn.vue')
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

//TODO Вынести названия роутов в массив
router.beforeEach((to, from, next) => {
	const accessToken = localStorage.getItem('token');

	if (!accessToken) {
		if (to.name === 'SignIn' || to.name === 'SignUp') {
			return next();
		} else {
			return next({
				name: 'SignIn'
			});
		}
	}

	if ((to.name === 'SignIn' || to.name === 'SignUp') && accessToken) {
		return next({
			name: 'Home'
		});
	}

	next();
});

export default router;
