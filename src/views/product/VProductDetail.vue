<template>
	<div v-if='!isLoading' class="v-product-detail">
		<div class='v-product-detail__head'>
			<div class='v-product-detail__title'>{{ product.name }}</div>
			<div class='v-product-detail__nav'>
				<div class='v-product-detail__creator'>
					<v-user-creator :name='product.user.displayName || product.user.email' :avatar='product.user.imagePath' :use-rating="true"/>
				</div>
				<div class='v-product-detail__buttons'>
					<v-button label='32' before-svg-component-name='VIconHeart' color='secondary'/>
					<button class='v-buy-button'>
						<span class='v-buy-button__price'>${{ product.price }}</span>
						<span class='v-buy-button__download'>Download now
						<v-icon-download/>
					</span>
					</button>
				</div>
			</div>
		</div>
		<div class='v-product-card__gallery gallery'>
			<div v-for="(picture, key) in product.pictures" :key='key' class='gallery__image'>
				<img :src='picture.path' :alt='product.name'>
			</div>
		</div>
		<v-box>
			<template #head>
				<v-widget-title title="Overview" color="orange" />
			</template>
			<template #body>
				<div class='v-product-detail__overview'>{{ product.description }}</div>
			</template>
		</v-box>
	</div>
</template>

<script>
import ProductsService from '@/service/ProductsService';
import VIconDownload from '@/components/icons/VIconDownload.vue';
import VUserCreator from '@/components/VUserCreator.vue';
import VButton from '@/components/UI/VButton.vue';

export default {
	name: 'VProductDetail',
	components: { VButton, VUserCreator, VIconDownload },
	data() {
		return {
			product: [],
			isLoading: false
		}
	},
	async created() {
		await this.fetchProduct();
	},
	methods: {
		async fetchProduct() {
			this.isLoading = true;
			const productId = this.$route.params.id;
			await ProductsService.getProduct(productId)
				.then((response) => {
					this.product = response.data;
				}).catch(async (error) =>{
					if (error.response.status === 404) {
						await this.$router.push({ name: 'Shop' });
						return;
					}

					console.error(error);
				})
				.finally(() => {
					this.isLoading = false;
				});
		}
	}
};
</script>

<style scoped lang='scss'>
.v-product-detail {
	display: flex;
	flex-direction: column;
	row-gap: 40px;
	padding: 24px;
	border-radius: 8px;
	background-color: var(--neutral-light-black-background-color);
	transition: background-color 0.3s;

	@media screen and (max-width: 1250px) {
		padding: 12px;
	}

	&__head {
		display: flex;
		flex-direction: column;
		row-gap: 12px;
	}

	&__nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 16px;

		@media screen and (max-width: 1024px) {
			align-items: flex-start;
			flex-direction: column;
		}
	}

	&__buttons {
		display: flex;
		gap: 16px;

		@media screen and (max-width: 1024px) {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
			width: 100%;
		}
	}

	&__title {
		font-weight: 600;
		font-size: 32px;
		line-height: 40px;
		letter-spacing: -0.02em;
		color: var(--neutral-champagne-color);

		@media screen and (max-width: 1024px) {
			font-size: 24px;
			line-height: 32px;
		}
	}

	&__creator {
		display: flex;
		align-items: center;
		column-gap: 12px;
	}

	&__slider {
		position: relative;
		height: 100%;
		max-height: 500px;

		& .swiper {
			height: inherit;
		}

		& .swiper-slide {
			text-align: center;
		}

		img {
			height: 100%;
			max-width: 100%;
			object-fit: contain;
		}

		@media screen and (max-width: 1024px) {
			max-height: 310px;
		}
	}

	&__overview {
		font-weight: 500;
		font-size: 15px;
		line-height: 24px;
		letter-spacing: -0.015em;
		color: var(--neutral-white-smoke-color);
	}

	@media screen and (max-width: 1024px) {
		row-gap: 32px;
	}
}

.v-buy-button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 18px;
	border: 2px solid transparent;
	border-radius: 12px;
	cursor: pointer;
	font-weight: 700;
	font-size: 15px;
	line-height: 24px;
	letter-spacing: -0.01em;
	transition: border 0.3s, color 0.3s, background-color 0.3s;
	background-color: var(--primary-blue-color);
	color: var(--primary-champagne-color);

	&:deep(svg) {
		path {
			fill: var(--primary-champagne-color);
		}
	}

	&__price {
		padding: 10px 18px 10px 0;
		margin-right: 18px;
		border-right: 1px solid #4493FC;
		box-shadow: 1px 0 0 0 #186FE3;
	}

	&__download {
		padding: 10px 0;
		display: flex;
		align-items: center;
		column-gap: 8px;
		white-space: nowrap;
	}

	@media screen and (max-width: 1024px) {
		padding: 0 14px;
	}
}

.gallery {
	display: flex;
	flex-wrap: wrap;
	gap: 24px;

	&__image {
		position: relative;
		-webkit-box-flex: 0;
		flex: 0 0 calc(50% - 12px);
		border-radius: 8px;
		overflow: hidden;

		&::before {
			content: "";
			display: block;
			padding-bottom: calc((1020 / 1350) * 100%);
		}

		img {
			position: absolute;
			top: 0;
			left: 0;
			display: block;
			width: 100%;
			height: 100%;
			max-width: 100%;
			object-fit: cover;
		}

		@media screen and (max-width: 1024px) {
			margin-bottom: 12px;

			&:last-child {
			margin-bottom: unset;
		}
		}
	}

	@media screen and (max-width: 1250px) {
		gap: 12px;
	}

	@media screen and (max-width: 1024px) {
		display: block;
	}
}
</style>