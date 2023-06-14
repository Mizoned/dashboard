import UserService from '@/service/UserService';

export const userModule = {
	namespaced: true,
	state: () => ({
		user: JSON.parse(localStorage.getItem('user')) || {}
	}),
	getters: {
		user(state) {
			return state.user;
		}
	},
	mutations: {
		setUser(state, obj) {
			localStorage.setItem('user', JSON.stringify(obj));
			state.user = obj;
		},
		setUserProperty(state, { property, value }) {
			state.user[property] = value;
			localStorage.setItem('user', JSON.stringify(state.user));
		},
		deleteUser(state) {
			localStorage.removeItem('user');
			state.user = {};
		}
	},
	actions: {
		updateUser({ state, commit }, data) {
			return new Promise((resolve, reject) => {
				UserService.updateUser(state.user.id, data)
					.then((response) => {
						commit('setUser', response.data.user);
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		},
		updatePassword({ state }, { oldPassword, newPassword, confirmNewPassword }) {
			return new Promise((resolve, reject) => {
				UserService.updatePassword(state.user.id, {
					oldPassword,
					newPassword,
					confirmNewPassword
				})
					.then((response) => {
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		},
		updateAvatar({ state, commit }, picture) {
			return new Promise((resolve, reject) => {
				UserService.updateAvatar(state.user.id, picture)
					.then((response) => {
						commit('setUserProperty', { property: 'imagePath', value: response.data.path });
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		},
		removeAvatar({ state, commit }) {
			return new Promise((resolve, reject) => {
				UserService.removeAvatar(state.user.id)
					.then((response) => {
						commit('setUserProperty', { property: 'imagePath', value: response.data.path });
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		}
	}
};
