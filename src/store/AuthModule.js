import AuthService from '@/service/AuthService';

export const authModule = {
	namespaced: true,
	state: () => ({
		token: localStorage.getItem('token') || '',
		isLoading: false
	}),
	mutations: {
		setToken(state, string) {
			localStorage.setItem('token', string);
			state.token = string;
		},
		deleteToken(state) {
			localStorage.removeItem('token');
			state.token = null;
		},
		setLoading(state, bool) {
			state.isLoading = bool;
		}
	},
	getters: {
		isLoading(state) {
			return state.isLoading;
		}
	},
	actions: {
		signIn({ commit }, { email, password }) {
			return AuthService.signIn(email, password)
				.then((response) => {
					commit('setToken', response.data.accessToken);
					commit('userModule/setUser', response.data.user, { root: true });
					return Promise.resolve(response);
				})
				.catch((error) => {
					return Promise.reject(error);
				});
		},
		checkAuthorization({ commit }) {
			return AuthService.checkAuthorization()
				.then((response) => {
					commit('setToken', response.data.accessToken);
					commit('userModule/setUser', response.data.user, { root: true });
					return Promise.resolve(response);
				})
				.catch((error) => {
					return Promise.reject(error);
				});
		},
		sendRegistrationCode(options, email) {
			return AuthService.sendRegistrationCode(email);
		},
		verifyRegistrationCode(options, { email, code }) {
			return AuthService.verifyRegistrationCode(email, code);
		},
		signUp({ commit }, { email, password }) {
			return AuthService.signUp(email, password)
				.then((response) => {
					commit('setToken', response.data.accessToken);
					commit('userModule/setUser', response.data.user, { root: true });
					return Promise.resolve(response);
				})
				.catch((error) => {
					return Promise.reject(error);
				});
		},
		logout({ commit }) {
			return AuthService.logout()
				.then((response) => {
					commit('deleteToken');
					commit('userModule/deleteUser', null, { root: true });
					return Promise.resolve(response);
				})
				.catch((error) => {
					return Promise.reject(error);
				});
		}
	}
};
