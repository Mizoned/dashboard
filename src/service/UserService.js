import $api from '@/http';

export default class UserService {
	static async updateProfileData(userId, data) {
		return $api.put(`/users/${userId}`, data);
	}

	static async updateProfilePassword(userId, data) {
		return $api.put(`/users/${userId}/password`, data);
	}

	static async updateProfilePicture(userId, picture) {
		return $api.put(`/users/${userId}/avatar`, picture);
	}

	static async removeProfilePicture(userId) {
		return $api.delete(`/users/${userId}/avatar`);
	}
}
