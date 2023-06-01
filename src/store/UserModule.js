import UserService from '@/service/UserService';

export const userModule = {
	namespaced: true,
	state: () => ({
		user: JSON.parse(localStorage.getItem('user')) || {}
	}),
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
		updateProfileData({ state, commit }, data) {
			return new Promise((resolve, reject) => {
				UserService.updateProfileData(state.user.id, data)
					.then((response) => {
						commit('setUser', response.data.user);
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		},
		updateProfilePassword({ state }, { oldPassword, newPassword, confirmNewPassword }) {
			return new Promise((resolve, reject) => {
				UserService.updateProfilePassword(state.user.id, {
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
		updateProfilePicture({ state, commit }, picture) {
			return new Promise((resolve, reject) => {
				UserService.updateProfilePicture(state.user.id, picture)
					.then((response) => {
						commit('setUserProperty', { property: 'imagePath', value: response.data.path });
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		},
		removeProfilePicture({ state, commit }) {
			return new Promise((resolve, reject) => {
				UserService.removeProfilePicture(state.user.id)
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
