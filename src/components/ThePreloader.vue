<template>
	<div class="v-loader">
		<div class="v-loader__icon">
			<v-logotype />
		</div>
	</div>
</template>

<script>
import VLogotype from '@/components/VLogotype.vue';

export default {
	name: 'ThePreloader',
	components: { VLogotype }
};
</script>

<style scoped lang="scss">
.v-loader {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	padding: 32px;
	background-color: var(--neutral-light-black-background-color);
	z-index: 100;

	&__icon {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateY(-50%);

		&:deep(img) {
			animation: rotate-vertical 1.3s ease-in-out infinite;
		}
	}
}

@keyframes rotate-vertical {
	0% {
		transform: rotateY(0);
	}
	100% {
		transform: rotateY(360deg);
	}
}
</style>
