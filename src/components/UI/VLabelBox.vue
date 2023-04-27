<template>
	<div class="v-label-box">
		<v-label :label="label" :tooltip-message="tooltipMessage" :is-error="isError" />
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'VLabelBox',
	props: {
		label: {
			type: String,
			default: 'String'
		},
		tooltipMessage: {
			type: String,
			default: ''
		},
		isError: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style scoped lang="scss">
.v-label-box {
	display: flex;
	flex-direction: column;
	gap: 14px;
}
</style>
