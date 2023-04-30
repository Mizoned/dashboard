import UserService from '@/service/UserService';

export const userModule = {
	namespaced: true,
	actions: {
		updateProfileData({ commit }, data) {
			return new Promise((resolve, reject) => {
				UserService.updateProfileData(data)
					.then((response) => {
						commit('auth/setUser', response.data.user, { root: true });
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		},
		updateProfilePassword(options, { oldPassword, newPassword, confirmNewPassword }) {
			return new Promise((resolve, reject) => {
				UserService.updateProfilePassword(oldPassword, newPassword, confirmNewPassword)
					.then((response) => {
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		},
		updateProfilePicture({ commit }, picture) {
			return new Promise((resolve, reject) => {
				UserService.updateProfilePicture(picture)
					.then((response) => {
						commit(
							'auth/setUserProperty',
							{ property: 'imagePath', value: response.data.path },
							{ root: true }
						);
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		},
		removeProfilePicture({ commit }) {
			return new Promise((resolve, reject) => {
				UserService.removeProfilePicture()
					.then((response) => {
						commit(
							'auth/setUserProperty',
							{ property: 'imagePath', value: response.data.path },
							{ root: true }
						);
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		}
	}
};
