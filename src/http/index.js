import axios from 'axios';
export const API_URL = `http://localhost:5000/api`;

const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL
});

$api.interceptors.request.use((config) => {
	const accessToken = localStorage.getItem('token');

	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

$api.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config;
		if (error?.response?.status === 401 && error.config && !error.config._isRetry) {
			originalRequest._isRetry = true;
			try {
				const response = await axios.get(`${API_URL}/auth/refresh`, { withCredentials: true });
				localStorage.setItem('token', response.data.accessToken);
				return $api.request(originalRequest);
			} catch (e) {
				localStorage.removeItem('token');
				localStorage.removeItem('user');
			}
		}
		return Promise.reject(error);
	}
);

export default $api;
