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
			<v-view-switch
				class="product-drafts__switch"
				:model-value="isList"
				@update:model-value="changeView"
			/>
		</div>
		<div class="product-drafts__body">
			<keep-alive>
				<div v-if="isList" class="product-drafts__table">
					<products-table-unreleased :columns="productColumns" :products="products" />
				</div>
				<div v-else class="product-drafts__cards">
					<v-product-card v-for="product in products" :key="product.id" :product="product" />
				</div>
			</keep-alive>
		</div>
		<div class="product-drafts__footer">
			<v-button size="sm" label="Load more" :is-loading="true" color="secondary"></v-button>
		</div>
	</div>
</template>

<script>
import VViewSwitch from '@/components/UI/VViewSwitch.vue';
import VInputIcon from '@/components/UI/VInputIcon.vue';
import VButton from '@/components/UI/VButton.vue';
import VProductCard from '@/components/VProductCard.vue';
import ProductsTableUnreleased from '@/components/products/table/unreleased/ProductsTableUnreleased.vue';

export default {
	name: 'VProductDraftsView',
	components: { ProductsTableUnreleased, VProductCard, VButton, VInputIcon, VViewSwitch },
	data() {
		return {
			isList: true,
			productColumns: ['Product', 'Price', 'Last edited'],
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

	&__table {
		margin: 0 -12px;
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
}
</style>
