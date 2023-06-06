import $api from '@/http';

export default class UserProductsService {
	static getDraftProducts(userId, limit = 5, page = 1) {
		return $api.get(`/users/${userId}/products/draft`, {
			params: { limit, page }
		});
	}

	static getReleasedProducts(userId, limit = 5, page = 1) {
		return $api.get(`/users/${userId}/products/released`, {
			params: { limit, page }
		});
	}

	static getScheduledProducts(userId, limit = 5, page = 1) {
		return $api.get(`/users/${userId}/products/scheduled`, {
			params: { limit, page }
		});
	}

	static removeProduct(userId, productId) {
		return $api.delete(`/users/${userId}/products/${productId}`);
	}
}
