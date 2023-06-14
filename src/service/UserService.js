import $api from '@/http';

export default class UserService {
	static async updateUser(userId, data) {
		return $api.put(`/users/${userId}`, data);
	}

	static async updatePassword(userId, data) {
		return $api.put(`/users/${userId}/password`, data);
	}

	static async updateAvatar(userId, avatar) {
		return $api.put(`/users/${userId}/avatar`, avatar);
	}

	static async removeAvatar(userId) {
		return $api.delete(`/users/${userId}/avatar`);
	}
}
