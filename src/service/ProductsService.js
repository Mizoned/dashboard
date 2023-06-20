import $api from '@/http';
import sanitizeParams from '@/utils/sanitizeParams';

export default class ProductsService {
	static async getProducts(limit = 5, page = 1, search = '') {
		let params = sanitizeParams({ limit, page, search });

		return $api.get(`/products`, {
			params
		});
	}

	static async getProduct(productId) {
		return $api.get(`/products/${productId}`);
	}
}
