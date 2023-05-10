<template>
	<div :class="['app', { 'light-theme': !isDarkThemeMode }]">
		<router-view />
	</div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters({
			isDarkThemeMode: 'theme/isDarkThemeMode'
		})
	}
};
</script>

<style scoped lang="scss">
.app {
	display: flex;
	height: 100%;
	overflow: hidden;
	background-color: var(--neutral-dark-black-background-color);
	transition: background-color 0.3s;
}
</style>
