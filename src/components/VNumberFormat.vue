<template>
	<div class="v-number-format">{{ value }}</div>
</template>

<script>
export default {
	name: 'VNumberFormat',
	props: {
		value: {
			type: String,
			required: true
		}
	}
};
</script>

<style scoped lang="scss">
.v-number-format {
	display: inline-block;
	padding: 0 8px;
	font-style: normal;
	font-weight: 600;
	font-size: 15px;
	line-height: 24px;
	text-align: center;
	letter-spacing: -0.01em;
	color: var(--neutral-champagne-color);
	background: var(--neutral-dark-gray-background-color);
	border-radius: 6px;
	white-space: nowrap;
	transition: background-color 0.3s, color 0.3s;
}
</style>
