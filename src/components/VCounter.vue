<template>
	<span :class="['v-counter', `v-counter--${color}`]">{{ quantity }}</span>
</template>

<script>
export default {
	name: 'VCounter',
	props: {
		quantity: {
			type: [String, Number],
			required: true
		},
		color: {
			type: String,
			required: true
		}
	}
};
</script>

<style scoped lang="scss">
.v-counter {
	display: inline-block;
	min-width: 24px;
	height: 24px;
	font-weight: 600;
	font-size: 15px;
	text-align: center;
	line-height: 24px;
	letter-spacing: -0.01em;
	color: var(--neutral-light-black-color);
	background-color: transparent;
	border-radius: 6px;
	padding: 0 6px;
	transition: color 0.3s, background 0.3s;

	&--default {
		color: var(--neutral-champagne-color);
		background-color: var(--neutral-dark-gray-background-color);
	}
	&--blue {
		background-color: var(--secondary-blue-color);
	}
	&--yellow {
		background-color: var(--secondary-yellow-color);
	}
	&--orange {
		background-color: var(--secondary-orange-color);
	}
	&--purple {
		background-color: var(--secondary-purple-color);
	}
	&--green {
		background-color: var(--secondary-green-color);
	}
}
</style>
