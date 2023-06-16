<template>
	<div class="shop">
		<div class="shop__header">
			<v-widget-title class="shop__title" title="Products" color="blue" />
			<v-input-icon
				:model-value="search"
				svg-name-component="VIconSearch"
				class="shop__search"
				placeholder="Search product"
				size="sm"
				:use-error="false"
				@update:model-value="searchHandler"
			/>
			<!--			<div class='shop__filters'>-->
			<!--				<v-button size='square' color='secondary' before-svg-component-name='VIconFilter' />-->
			<!--			</div>-->
		</div>
		<div v-if="!isLoading" class="shop__content">
			<!--TODO В будещем создать отдельный компонент-карточки продукта для shop страницы, т.к разная логика обработки и поведения-->
			<v-product-grid :products="products" />
			<div class="shop__footer">
				<v-pagination
					:current-page="page"
					:total-pages="totalPages"
					@update:current-page="changePageHandler"
				/>
			</div>
		</div>
		<v-preloader v-else />
	</div>
</template>

<script>
import VProductGrid from '@/components/VProductGrid.vue';
import toastificationMixin from '@/mixins/toastification.mixin';
import { mapActions, mapMutations, mapState } from 'vuex';
import debounceMixin from '@/mixins/debounce.mixin';

export default {
	name: 'ShopView',
	components: { VProductGrid },
	mixins: [toastificationMixin, debounceMixin],
	data: () => ({}),
	computed: {
		...mapState({
			products: (s) => s.shopModule.products,
			page: (s) => s.shopModule.page,
			totalPages: (s) => s.shopModule.totalPages,
			isLoading: (s) => s.shopModule.isLoading,
			search: (s) => s.shopModule.search
		})
	},
	async mounted() {
		await this.getProducts();
	},
	methods: {
		...mapActions('shopModule', {
			getProducts: 'getProducts'
		}),
		...mapMutations('shopModule', {
			setLoading: 'setLoading',
			setPage: 'setPage',
			setSearch: 'setSearch'
		}),
		changePageHandler(page) {
			this.setPage(page);
			this.getProducts();
		},
		searchHandler(event) {
			this.debounce(() => {
				this.setPage(1);
				this.setSearch(event);
				this.getProducts();
			}, 800)();
		}
	}
};
</script>

<style scoped lang="scss">
.shop {
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

	&__content {
		display: flex;
		flex-direction: column;
		row-gap: 32px;
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

	&__filters {
		margin-left: auto;
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
