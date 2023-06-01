import axios from 'axios';
import store from '@/store';
import router from '@/router';
export const API_URL = `http://localhost:5000/api`;

const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL
});

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	return config;
});

$api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		const originalRequest = error.config;
		if (error?.response?.status === 401 && error.config && !error.config._isRetry) {
			originalRequest._isRetry = true;
			try {
				const response = await axios.get(`${API_URL}/auth/refresh`, { withCredentials: true });
				store.commit('authModule/setToken', response.data.accessToken);
				return $api.request(originalRequest);
			} catch (e) {
				if (e.response.status === 401) {
					await store.dispatch('authModule/logout');
					await router.push('/sign-in');
				} else {
					throw e;
				}
			}
		}
		throw error;
	}
);

export default $api;
