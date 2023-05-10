<template>
	<div class="products-table-unreleased-item">
		<div class="products-table-unreleased-item__cell">
			<v-checkbox />
		</div>
		<div class="products-table-unreleased-item__cell">
			<products-table-item-preview
				:title="product.title"
				:description="product.description"
				:image-src="product.imageSrc"
				:alt="product.alt"
			/>
		</div>
		<div class="products-table-unreleased-item__cell">
			<div class="products-table-unreleased-item__property">Price</div>
			<v-price price="98" currency="$"></v-price>
		</div>
		<div class="products-table-unreleased-item__cell">
			<div class="products-table-unreleased-item__property">Last edited</div>
			<div class="products-table-unreleased-item__date">Apr 9, 2021 at 3:55 PM</div>
		</div>
		<div class="products-table-unreleased-item__cell">
			<products-table-unreleased-item-controls />
		</div>
	</div>
</template>

<script>
import ProductsTableUnreleasedItemControls from '@/components/products/table/unreleased/item/ProductsTableUnreleasedItemControls.vue';
import ProductsTableItemPreview from '@/components/products/table/item/ProductsTableItemPreview.vue';
import VPrice from '@/components/VPrice.vue';

export default {
	name: 'ProductsTableUnreleasedItem',
	components: { VPrice, ProductsTableItemPreview, ProductsTableUnreleasedItemControls },
	props: {
		product: {
			type: Object,
			default: () => {}
		}
	}
};
</script>

<style scoped lang="scss">
.products-table-unreleased-item {
	display: table-row;
	background-color: var(--neutral-light-black-background-color);
	transition: background-color 0.3s, border-bottom-color 0.3s;

	&__cell {
		position: relative;
		display: table-cell;
		vertical-align: middle;
		padding: 12px 16px;

		@media screen and (min-width: 1025px) {
			&:after {
				content: '';
				position: absolute;
				left: 0;
				bottom: -8px;
				right: 0;
				height: 1px;
				background: var(--neutral-dark-gray-background-color);
				transition: background-color 0.3s;
			}
		}

		&:first-child {
			width: 24px;
			border-radius: 8px 0 0 8px;
			padding: 12px 16px 12px 12px;
		}

		&:last-child {
			border-radius: 0 8px 8px 0;
			padding: 12px 12px 12px 16px;
		}
	}

	&:last-child {
		& .products-table-unreleased-item__cell {
			&:after {
				display: none;
			}
		}
	}

	&__property {
		display: block;
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: -0.01em;
		color: var(--primary-dark-white-color);
		width: 80px;

		@media screen and (min-width: 1025px) {
			display: none;
		}
	}

	&__date {
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: -0.01em;
		color: var(--primary-dark-white-color);
	}

	@media screen and (min-width: 1025px) {
		&:hover {
			background-color: var(--neutral-dark-gray-background-color);
		}
	}

	@media screen and (max-width: 1024px) {
		border-bottom: 1px solid var(--neutral-dark-gray-background-color);
	}
}

@media screen and (max-width: 1024px) {
	.products-table-unreleased-item {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 8px 8px 24px 8px;

		&__cell {
			display: flex;
			align-items: center;
			gap: 20px;
			padding: 0;

			&:first-child {
				display: none;
				padding: 0;
			}

			&:last-child {
				padding: 0;
			}
		}
	}
}
</style>
