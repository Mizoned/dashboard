import $api from '@/http';

export default class UserProductsService {
	static async getDraftProducts(userId, limit = 5, page = 1) {
		return $api.get(`/users/${userId}/products/drafted`, {
			params: { limit, page }
		});
	}

	static async createDraftProduct(userId, data) {
		return $api.post(`/users/${userId}/products/drafted`, data);
	}

	static async getReleasedProducts(userId, limit = 5, page = 1) {
		return $api.get(`/users/${userId}/products/released`, {
			params: { limit, page }
		});
	}

	static async getScheduledProducts(userId, limit = 5, page = 1) {
		return $api.get(`/users/${userId}/products/scheduled`, {
			params: { limit, page }
		});
	}

	static async removeProduct(userId, productId) {
		return $api.delete(`/users/${userId}/products/${productId}`);
	}
}
