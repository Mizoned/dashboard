<template>
	<div class="v-toggle">
		<div class="v-toggle__box">
			<v-label :label="label" :tooltip-message="tooltipMessage" />
			<slot></slot>
		</div>
		<v-divider v-if="useDivider" class="v-toggle__divider" />
	</div>
</template>

<script>
export default {
	name: 'VToggle',
	props: {
		label: {
			type: String,
			required: true
		},
		tooltipMessage: {
			type: String,
			default: ''
		},
		useDivider: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style scoped lang="scss">
.v-toggle {
	&__box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 24px;
	}

	&__divider {
		margin-top: 16px;
	}
}
</style>
