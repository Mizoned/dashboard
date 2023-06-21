<template>
	<div class="v-user-creator">
		<v-avatar class="v-user-creator__avatar" :src="avatar" size="sm" />
<!-- TODO сделать ссылку в будущем на страницу пользователя с помощью isLink на странице создания продукта не нужна ссылка -->
		<div class="v-user-creator__name">by <span>{{ name }}</span></div>
		<v-rating v-if='rating || useRating' :value='rating.value' :count='rating.count'></v-rating>
	</div>
</template>

<script>
export default {
	name: 'VUserCreator',
	props: {
		avatar: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		useRating: {
			type: Boolean,
			default: false
		},
		rating: {
			type: [String, Number],
			default: 0
		},
		isLink: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style scoped lang='scss'>
.v-user-creator {
	display: flex;
	align-items: center;
	gap: 12px;

	&__name {
		font-style: normal;
		font-weight: 500;
		font-size: 15px;
		line-height: 24px;
		letter-spacing: -0.015em;
		color: var(--primary-dark-white-color);
		white-space: nowrap;

		span {
			font-weight: 600;
			letter-spacing: -0.01em;
			color: var(--neutral-champagne-background-color);
		}
	}
}
</style>