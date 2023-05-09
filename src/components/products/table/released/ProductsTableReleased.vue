<template>
	<div class="products-table-released">
		<products-table-released-header :columns="columns" />
		<products-table-released-item
			v-for="product in products"
			:key="product.id"
			:product="product"
		/>
	</div>
</template>

<script>
import ProductsTableReleasedItem from '@/components/products/table/released/item/ProductsTableReleasedItem.vue';
import ProductsTableReleasedHeader from '@/components/products/table/released/ProductsTableReleasedHeader.vue';

export default {
	name: 'ProductsTableReleased',
	components: { ProductsTableReleasedItem, ProductsTableReleasedHeader },
	props: {
		products: {
			type: Array,
			default: () => []
		},
		columns: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style scoped lang="scss">
.products-table-released {
	display: table;
	border-spacing: 0 16px;
	width: 100%;

	@media screen and (max-width: 1024px) {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
}
</style>
