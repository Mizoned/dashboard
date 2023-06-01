import AuthService from '@/service/AuthService';

export const authModule = {
	namespaced: true,
	state: () => ({
		token: localStorage.getItem('token') || ''
	}),
	mutations: {
		setToken(state, string) {
			localStorage.setItem('token', string);
			state.token = string;
		},
		deleteToken(state) {
			localStorage.removeItem('token');
			state.token = null;
		}
	},
	actions: {
		signIn({ commit }, { email, password }) {
			return new Promise((resolve, reject) => {
				AuthService.signIn(email, password)
					.then((response) => {
						commit('setToken', response.data.accessToken);
						commit('userModule/setUser', response.data.user, { root: true });
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		},
		sendRegistrationCode(options, email) {
			return new Promise((resolve, reject) => {
				AuthService.sendRegistrationCode(email)
					.then((response) => {
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		},
		verifyRegistrationCode(options, { email, code }) {
			return new Promise((resolve, reject) => {
				AuthService.verifyRegistrationCode(email, code)
					.then((response) => {
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		},
		signUp({ commit }, { email, password }) {
			return new Promise((resolve, reject) => {
				AuthService.signUp(email, password)
					.then((response) => {
						commit('setToken', response.data.accessToken);
						commit('userModule/setUser', response.data.user, { root: true });
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		},
		logout({ commit }) {
			return new Promise((resolve, reject) => {
				AuthService.logout()
					.then((response) => {
						commit('deleteToken');
						commit('userModule/deleteUser', null, { root: true });
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		}
	}
};
