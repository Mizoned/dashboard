<template>
	<div :class="['v-overlay', { active: isActive }]"></div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'VOverlay',
	computed: {
		...mapState({
			isActive: (state) => state.overlay.isOverlayActive
		})
	}
};
</script>

<style scoped lang="scss">
.v-overlay {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: var(--neutral-dark-gray-background-color);
	opacity: 0;
	visibility: hidden;
	transition: background-color 0.3s, visibility 0.3s, opacity 0.3s;
	z-index: 5;

	&.active {
		visibility: visible;
		opacity: 0.9;
	}
}
</style>
