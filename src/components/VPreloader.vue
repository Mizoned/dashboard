<template>
	<div class="v-preloader">Loading <v-icon-preloader /></div>
</template>

<script>
export default {
	name: 'VPreloader'
};
</script>

<style scoped lang="scss">
.preloader {
	display: flex;
	justify-content: center;
	column-gap: 8px;
	align-items: center;
	color: var(--neutral-champagne-background-color);
}
</style>
