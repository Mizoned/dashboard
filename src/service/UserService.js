import $api from '@/http';

export default class UserService {
	static async updateProfileData(data) {
		return $api.put('/user/update-profile-data', data);
	}

	static async updateProfilePassword(oldPassword, newPassword, confirmNewPassword) {
		return $api.put('/user/update-profile-password', {
			oldPassword,
			newPassword,
			confirmNewPassword
		});
	}

	static async updateProfilePicture(picture) {
		return $api.put('/user/update-profile-picture', picture);
	}

	static async removeProfilePicture() {
		return $api.delete('/user/remove-profile-picture');
	}
}
