<template>
	<div class="v-price">{{ currency }}{{ price }}</div>
</template>

<script>
export default {
	name: 'VPrice',
	props: {
		price: {
			type: [String, Number],
			default: 0
		},
		currency: {
			type: [String, Number],
			default: '₽'
		}
	}
};
</script>

<style scoped lang="scss">
.v-price {
	display: inline-block;
	padding: 4px 8px;
	border-radius: 4px;
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	line-height: 24px;
	letter-spacing: -0.01em;
	color: var(--neutral-light-black-color);
	background-color: var(--secondary-green-color);
	transition: background-color 0.3s, color 0.3s;
}
</style>
