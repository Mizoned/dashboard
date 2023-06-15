<template>
	<div class="products-table-unreleased-item-preview">
		<div class="products-table-unreleased-item-preview__image">
			<img :src="imageSrc" :alt="alt" @error="loadingErrorHandler" />
		</div>
		<div class="products-table-unreleased-item-preview__details">
			<div class="products-table-unreleased-item-preview__title">{{ title }}</div>
			<div class="products-table-unreleased-item-preview__description">{{ description }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductsTableItemPreview',
	props: {
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			default: ''
		},
		pictures: {
			type: Array,
			default: () => []
		},
		alt: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			imageSrc: ''
		};
	},
	created() {
		this.imageSrc = this.pictures[0]?.path ?? '';
	},
	methods: {
		loadingErrorHandler() {
			this.imageSrc = new URL('@/assets/images/products/product-1.jpg', import.meta.url).href;
		}
	}
};
</script>

<style scoped lang="scss">
.products-table-unreleased-item-preview {
	display: flex;
	align-items: center;
	gap: 20px;

	&__image {
		width: 80px;
		height: 80px;
		border-radius: 8px;
		overflow: hidden;
		flex-shrink: 0;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	&__details {
		display: flex;
		flex-direction: column;
		gap: 4px;
		max-width: 170px;

		@media screen and (max-width: 1024px) {
			max-width: unset;
		}
	}

	&__title {
		font-style: normal;
		font-weight: 700;
		font-size: 15px;
		line-height: 24px;
		letter-spacing: -0.01em;
		color: var(--neutral-champagne-color);
		transition: color 0.3s;

		@media screen and (max-width: 1024px) {
			font-weight: 600;
			font-size: 18px;
			letter-spacing: -0.02em;
		}
	}

	&__description {
		font-style: normal;
		font-weight: 600;
		font-size: 13px;
		line-height: 16px;
		letter-spacing: -0.01em;
		color: var(--primary-ivory-color);

		@media screen and (max-width: 1024px) {
			font-size: 15px;
			line-height: 24px;
		}
	}
}
</style>
