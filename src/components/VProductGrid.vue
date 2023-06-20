<template>
	<div class="v-product-grid">
		<template v-for="product in products" :key="product.id">
			<router-link :to="{ name: 'Product detail', params: { id: product.id } }">
				<v-product-card
					:product="product"
				/>
			</router-link>
		</template>

	</div>
</template>

<script>
import VProductCard from '@/components/VProductCard.vue';

export default {
	name: 'VProductGrid',
	components: { VProductCard },
	props: {
		products: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style scoped>
.v-product-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
	gap: 24px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
}
</style>
