<template>
	<div v-if='!isLoading' class="v-product-detail">
		<div class='v-product-detail__head'>
			<div class='v-product-detail__buttons'>
				<button class='v-buy-button'>
					<span class='v-buy-button__price'>${{ product.price }}</span>
					<span class='v-buy-button__download'>Download now
						<v-icon-download/>
					</span>
				</button>
			</div>
		</div>
		<div class='v-product-detail__info'>
			<div class='v-product-detail__title'>{{ product.name }}</div>
			<div class='v-product-detail__creator'>
				<v-user-creator :name='product.user.displayName || product.user.email' :avatar='product.user.imagePath'/>
				<v-rating></v-rating>
			</div>
		</div>
		<div class='v-product-detail__slider'>
			<swiper
				:slides-per-view="1"
				:space-between="50"
				navigation
				:modules='modules'
				:pagination="{ clickable: true }"
				@swiper="onSwiper"
				@slide-change="onSlideChange"
			>
				<template v-for="(picture, key) in product.pictures" :key='key'>
					<swiper-slide><img :src='picture.path' :alt='product.name'></swiper-slide>
				</template>
			</swiper>
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
import VBox from '@/components/VBox.vue';
import VButton from '@/components/UI/VButton.vue';
import VIconDownload from '@/components/icons/VIconDownload.vue';
import { mapGetters, mapState } from 'vuex';
import VUserCreator from '@/components/VUserCreator.vue';
import VRating from '@/components/UI/VRating.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

export default {
	name: 'VProductDetail',
	components: { VRating, VUserCreator, VIconDownload, VButton, VBox, Swiper, SwiperSlide },
	data() {
		return {
			product: [],
			isLoading: false,
			modules: [Navigation, Pagination]
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
					console.log(response);
					this.product = response.data;
				}).catch((error) =>{
					console.log(error);
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
		width: 100%;
	}

	&__buttons {
		display: flex;
		column-gap: 16px;
		margin-left: auto;
	}

	&__info {
		display: flex;
		flex-direction: column;
		row-gap: 12px;
	}

	&__title {
		font-weight: 600;
		font-size: 32px;
		line-height: 40px;
		letter-spacing: -0.03em;
		color: var(--neutral-champagne-color);
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
}

.v-buy-button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 18px;
	gap: 8px;
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
		padding: 10px 20px 10px 0;
		margin-right: 20px;
		border-right: 1px solid #4493FC;
		box-shadow: 1px 0 0 0 #186FE3;
	}

	&__download {
		padding: 10px 0;
		display: flex;
		align-items: center;
		column-gap: 8px;
	}
}
</style>