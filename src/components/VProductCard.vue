<template>
	<div class="v-product-card">
		<div class="v-product-card__preview">
			<img
				class="v-product-card__image"
				:src="path"
				:alt="product.name"
				@error="loadingErrorHandler"
			/>
		</div>
		<div class="v-product-card__box">
			<div class="v-product-card__details">
				<div class="v-product-card__title">{{ product.name }}</div>
				<div class="v-product-card__rating">
					<v-rating :count="product.counterRating" :value="product.rating"></v-rating>
				</div>
			</div>
			<div class="v-product-card__price">
				<v-price :price="product.price" currency="$"></v-price>
			</div>
		</div>
	</div>
</template>

<script>
import VRating from '@/components/UI/VRating.vue';
import VPrice from '@/components/VPrice.vue';

export default {
	name: 'VProductCard',
	components: { VPrice, VRating },
	props: {
		product: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			path: ''
		};
	},
	created() {
		this.path = this.product.pictures[0]?.path ?? '';
	},
	methods: {
		loadingErrorHandler() {
			this.path = new URL('@/assets/images/products/product-1.jpg', import.meta.url).href;
		}
	}
};
</script>

<style scoped lang="scss">
.v-product-card {
	display: flex;
	flex-direction: column;
	gap: 16px;

	&__preview {
		border-radius: 12px;
		overflow: hidden;
		height: 200px;
	}

	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&__box {
		display: flex;
		justify-content: space-between;
		gap: 40px;
	}

	&__details {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	&__title {
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		line-height: 24px;
		letter-spacing: -0.01em;
		color: var(--neutral-champagne-color);
	}

	&__rating {
	}

	&__price {
	}
}
</style>
