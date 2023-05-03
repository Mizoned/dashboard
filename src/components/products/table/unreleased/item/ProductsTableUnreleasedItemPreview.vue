<template>
	<div class="products-table-unreleased-item-preview">
		<div class="products-table-unreleased-item-preview__image">
			<img :src="path" :alt="alt" @error="loadingErrorHandler" />
		</div>
		<div class="products-table-unreleased-item-preview__details">
			<div class="products-table-unreleased-item-preview__title">{{ title }}</div>
			<div class="products-table-unreleased-item-preview__description">{{ description }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductsTableUnreleasedItemPreview',
	props: {
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			default: ''
		},
		imageSrc: {
			type: String,
			default: '@/assets/images/products/product-1.jpg'
		},
		alt: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			path: ''
		};
	},
	watch: {
		imageSrc(newVal) {
			this.path = newVal;
		}
	},
	created() {
		this.path = this.imageSrc;
	},
	methods: {
		loadingErrorHandler() {
			this.path = new URL('@/assets/images/products/product-1.jpg', import.meta.url).href;
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
	}

	&__title {
		font-style: normal;
		font-weight: 700;
		font-size: 15px;
		line-height: 24px;
		letter-spacing: -0.01em;
		color: var(--neutral-champagne-color);
		transition: color 0.3s;
		max-width: 170px;
	}

	&__description {
		font-style: normal;
		font-weight: 600;
		font-size: 13px;
		line-height: 16px;
		letter-spacing: -0.01em;
		color: var(--primary-ivory-color);
	}
}
</style>
