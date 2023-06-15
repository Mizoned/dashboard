<template>
	<div class="product-drafts">
		<div class="product-drafts__header">
			<v-widget-title class="product-drafts__title" title="Products" color="purple" />
			<v-input-icon
				class="product-drafts__search"
				svg-name-component="VIconSearch"
				placeholder="Search product"
				size="sm"
			/>
			<v-view-switch v-model="isList" class="product-drafts__switch" />
		</div>
		<div v-if="!isLoading" class="product-drafts__content">
			<div class="product-drafts__products">
				<keep-alive>
					<div v-if="isList" class="product-drafts__table">
						<products-table-unreleased
							:columns="productColumns"
							:products="products"
							@remove-product="removeProductHandler"
						/>
					</div>
					<div v-else class="product-drafts__cards">
						<v-product-card v-for="product in products" :key="product.id" :product="product" />
					</div>
				</keep-alive>
			</div>
			<div class="product-drafts__footer">
				<v-pagination v-model:current-page="page" :total-pages="totalPages" />
			</div>
		</div>
		<v-preloader v-else />
	</div>
</template>

<script>
import VViewSwitch from '@/components/UI/VViewSwitch.vue';
import VProductCard from '@/components/VProductCard.vue';
import ProductsTableUnreleased from '@/components/products/table/unreleased/ProductsTableUnreleased.vue';
import { mapGetters } from 'vuex';
import UserProductsService from '@/service/UserProductsService';
import toastificationMixin from '@/mixins/toastification.mixin';

export default {
	name: 'VProductDraftsView',
	components: {
		ProductsTableUnreleased,
		VProductCard,
		VViewSwitch
	},
	mixins: [toastificationMixin],
	data() {
		return {
			isList: true,
			productColumns: ['Product', 'Price', 'Last edited'],
			products: [],
			limit: 6,
			page: 1,
			totalPages: 0,
			isLoading: true
		};
	},
	computed: {
		...mapGetters({
			user: 'userModule/user'
		})
	},
	watch: {
		page() {
			this.fetchProducts();
		}
	},
	mounted() {
		this.fetchProducts();
	},
	methods: {
		async fetchProducts() {
			this.isLoading = true;

			await UserProductsService.getDraftProducts(this.user.id, this.limit, this.page)
				.then((response) => {
					this.products = response.data.products;
					this.totalPages = Math.ceil(response.data.count / this.limit);
				})
				.catch((error) => {
					this.showErrorNotification(
						error.response?.data?.message ?? 'Произошла непрведвиденная ошибка'
					);
				})
				.finally(() => {
					this.isLoading = false;
				});
		},
		async removeProductHandler(product) {
			await UserProductsService.removeProduct(this.user.id, product.id)
				.then(() => {
					this.products = [...this.products].filter((p) => p.id !== product.id);

					this.showSuccessNotification('Продукт удален!');

					if (this.products.length === 0 && this.page > 1) {
						this.page--;
					}
				})
				.catch((error) => {
					this.showErrorNotification(
						error.response?.data?.message ?? 'Произошла непрведвиденная ошибка'
					);
				});
		}
	}
};
</script>

<style scoped lang="scss">
.product-drafts {
	display: flex;
	flex-direction: column;
	gap: 32px;
	border-radius: 8px;
	padding: 24px;
	background-color: var(--neutral-light-black-background-color);
	transition: background-color 0.3s;

	&__header {
		display: flex;
		align-items: center;
		gap: 24px;

		@media screen and (max-width: 768px) {
			gap: 16px;
			flex-wrap: wrap;
		}
	}

	&__search {
		width: 360px;

		@media screen and (max-width: 1024px) {
			width: auto;
		}

		@media screen and (max-width: 768px) {
			width: 100%;
			order: 3;
		}
	}

	&__switch {
		margin-left: auto;
	}

	&__content {
		display: flex;
		flex-direction: column;
		row-gap: 32px;
	}

	&__table {
		margin: 0 -12px;

		@media screen and (max-width: 1024px) {
			margin: 0 -8px;
		}
	}

	&__cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(308px, 1fr));
		gap: 24px;
	}

	&__footer {
		display: flex;
		justify-content: center;
	}

	@media screen and (max-width: 1024px) {
		padding: 16px;
	}
}
</style>
