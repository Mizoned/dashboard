<template>
	<svg
		:class="['v-icon-chevron', `v-icon-chevron--${direction}`]"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M18 15L12 9L6 15"
			stroke="#6F767E"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script>
export default {
	name: 'VIconChevron',
	props: {
		direction: {
			type: String,
			default: 'up'
		}
	}
};
</script>

<style scoped lang="scss">
.v-icon-chevron {
	transform: initial;
	transition: transform 0.3s;

	&--left {
		transform: rotate(-90deg);
	}

	&--right {
		transform: rotate(90deg);
	}

	&--up {
		transform: rotate(0deg);
	}

	&--down {
		transform: rotate(180deg);
	}
}
</style>
