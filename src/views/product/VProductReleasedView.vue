<template>
	<div class="product-released">
		<div class="product-released__header">
			<v-widget-title class="product-released__title" title="Products" color="purple" />
			<v-input-icon
				class="product-released__search"
				svg-name-component="VIconSearch"
				placeholder="Search product"
				size="sm"
			/>
			<v-view-switch
				class="product-released__switch"
				:model-value="isList"
				@update:model-value="changeView"
			/>
		</div>
		<div class="product-released__body">
			<keep-alive>
				<div v-if="isList" class="product-released__table">
					<products-table-released :columns="productColumns" :products="products" />
				</div>
				<div v-else class="product-released__cards">
					<v-product-card v-for="product in products" :key="product.id" :product="product" />
				</div>
			</keep-alive>
		</div>
		<div class="product-released__footer">
			<v-button size="sm" label="Load more" :is-loading="true" color="secondary"></v-button>
		</div>
	</div>
</template>

<script>
import ProductsTableReleased from '@/components/products/table/released/ProductsTableReleased.vue';
import VProductCard from '@/components/VProductCard.vue';
import VInputIcon from '@/components/UI/VInputIcon.vue';
import VViewSwitch from '@/components/UI/VViewSwitch.vue';

export default {
	name: 'VProductReleasedView',
	components: { ProductsTableReleased, VProductCard, VInputIcon, VViewSwitch },
	data() {
		return {
			isList: true,
			productColumns: ['Product', 'Price', 'Status', 'Rating', 'Sales', 'Views'],
			products: [
				{
					id: 1,
					title: 'Fleet - Travel shopping UI design kit',
					description: 'UI design kit',
					imageSrc: '/src/assets/images/products/product-1.jpg',
					alt: 'Fleet - Travel shopping UI design kit',
					price: 98,
					currency: '$',
					rating: 4.8,
					counterRating: 87
				},
				{
					id: 2,
					title: 'Fleet - Travel shopping UI design kit',
					description: 'UI design kit',
					imageSrc: '/src/assets/images/products/product-2.jpg',
					alt: 'Fleet - Travel shopping UI design kit',
					price: 98,
					currency: '$',
					rating: 4.8,
					counterRating: 87
				},
				{
					id: 3,
					title: 'Fleet - Travel shopping UI design kit',
					description: 'UI design kit',
					imageSrc: '/src/assets/images/products/product-3.jpg',
					alt: 'Fleet - Travel shopping UI design kit',
					price: 98,
					currency: '$',
					rating: 4.8,
					counterRating: 87
				},
				{
					id: 4,
					title: 'Fleet - Travel shopping UI design kit',
					description: 'UI design kit',
					imageSrc: '/src/assets/images/products/product-4.jpg',
					alt: 'Fleet - Travel shopping UI design kit',
					price: 98,
					currency: '$',
					rating: 4.8,
					counterRating: 87
				},
				{
					id: 5,
					title: 'Fleet - Travel shopping UI design kit',
					description: 'UI design kit',
					imageSrc: '/src/assets/images/products/product-5.jpg',
					alt: 'Fleet - Travel shopping UI design kit',
					price: 98,
					currency: '$',
					rating: 4.8,
					counterRating: 87
				},
				{
					id: 6,
					title: 'Fleet - Travel shopping UI design kit',
					description: 'UI design kit',
					imageSrc: '/src/assets/images/products/product-6.jpg',
					alt: 'Fleet - Travel shopping UI design kit',
					price: 98,
					currency: '$',
					rating: 4.8,
					counterRating: 87
				}
			]
		};
	},
	methods: {
		changeView(bool) {
			this.isList = bool;
		}
	}
};
</script>

<style scoped lang="scss">
.product-released {
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
