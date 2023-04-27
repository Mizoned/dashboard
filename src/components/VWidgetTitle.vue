<template>
	<div :class="['v-widget-title', `v-widget-title--${color}`]">{{ title }}</div>
</template>

<script>
export default {
	name: 'VWidgetTitle',
	props: {
		title: {
			type: String,
			required: true
		},
		color: {
			type: String,
			default: 'orange'
		}
	}
};
</script>

<style scoped lang="scss">
.v-widget-title {
	position: relative;
	padding-left: 32px;
	font-size: 20px;
	font-weight: 600;
	line-height: 32px;
	letter-spacing: -0.02em;
	color: var(--neutral-champagne-background-color);
	transition: color 0.3s;

	&:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		width: 16px;
		height: 32px;
		transform: translateY(-50%);
		border-radius: 4px;
		background-color: transparent;
		transition: background-color 0.3s;
	}
	&--orange:before {
		background-color: var(--secondary-orange-color);
	}
	&--purple:before {
		background-color: var(--secondary-purple-color);
	}
	&--blue:before {
		background-color: var(--secondary-blue-color);
	}
	&--green:before {
		background-color: var(--secondary-green-color);
	}
	&--yellow:before {
		background-color: var(--secondary-yellow-color);
	}
}
</style>
