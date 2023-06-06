<template>
	<div v-if="products.length" class="products-table-unreleased">
		<products-table-unreleased-header :columns="columns" />
		<products-table-unreleased-item
			v-for="product in products"
			:key="product.id"
			:product="product"
			@remove="removeProductHandler"
		/>
	</div>
	<div v-else class="products-table-unreleased-empty">Not Found</div>
</template>

<script>
import ProductsTableUnreleasedHeader from '@/components/products/table/unreleased/ProductsTableUnreleasedHeader.vue';
import ProductsTableUnreleasedItem from '@/components/products/table/unreleased/item/ProductsTableUnreleasedItem.vue';

export default {
	name: 'ProductsTableUnreleased',
	components: { ProductsTableUnreleasedItem, ProductsTableUnreleasedHeader },
	props: {
		products: {
			type: Array,
			default: () => []
		},
		columns: {
			type: Array,
			default: () => []
		}
	},
	emits: ['remove-product'],
	methods: {
		removeProductHandler(product) {
			this.$emit('remove-product', product);
		}
	}
};
</script>

<style scoped lang="scss">
.products-table-unreleased {
	display: table;
	border-spacing: 0 16px;
	width: 100%;

	@media screen and (max-width: 1024px) {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
}

.products-table-unreleased-empty {
	display: flex;
	justify-content: center;
}
</style>
