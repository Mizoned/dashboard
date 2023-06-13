import ProductsService from '@/service/ProductsService';

export const shopModule = {
	namespaced: true,
	state: () => ({
		products: [],
		limit: 6,
		page: 1,
		totalPages: 0,
		isLoading: true,
		search: ''
	}),
	mutations: {
		setProducts(state, products) {
			state.products = products;
		},
		setPage(state, page) {
			state.page = page;
		},
		setTotalPages(state, pages) {
			state.totalPages = pages;
		},
		setLoading(state, bool) {
			state.isLoading = bool;
		},
		setSearch(state, string) {
			state.search = string;
		}
	},
	actions: {
		getProducts({ state, commit }) {
			commit('setLoading', true);
			return ProductsService.getProducts(state.limit, state.page, state.search)
				.then((response) => {
					commit('setProducts', response.data.products.rows ?? []);
					commit('setTotalPages', Math.ceil(response.data.products.count / state.limit));
					return Promise.resolve(response);
				})
				.catch((error) => {
					return Promise.reject(error);
				})
				.finally(() => commit('setLoading', false));
		}
	}
};
