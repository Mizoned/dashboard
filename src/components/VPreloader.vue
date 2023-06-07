<template>
	<div class="v-preloader">Loading <v-icon-preloader /></div>
</template>

<script>
export default {
	name: 'VPreloader'
};
</script>

<style scoped lang="scss">
.v-preloader {
	display: flex;
	justify-content: center;
	column-gap: 8px;
	align-items: center;
	color: var(--neutral-champagne-background-color);
	font-weight: 700;
	font-size: 15px;
	line-height: 24px;
	letter-spacing: -0.01em;

	&:deep(svg) {
		& > path {
			fill: var(--neutral-champagne-background-color);
		}
	}
}
</style>
