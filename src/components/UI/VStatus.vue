<template>
	<div v-if="isActive" class="v-status v-status--active">Active</div>
	<div v-else class="v-status v-status--inactive">Inactive</div>
</template>

<script>
export default {
	name: 'VStatus',
	props: {
		status: {
			type: String,
			default: 'Active'
		}
	},
	computed: {
		isActive() {
			return this.status === 'active' || this.status === 'Active';
		}
	}
};
</script>

<style scoped lang="scss">
.v-status {
	display: inline-block;
	font-style: normal;
	font-weight: 600;
	font-size: 15px;
	line-height: 24px;
	letter-spacing: -0.01em;
	transition: color 0.3s, background-color 0.3s;
	padding: 0 8px;
	border-radius: 4px;

	&--active {
		color: var(--primary-green-color);
		background-color: var(--primary-green-14-color);
	}

	&--inactive {
		color: var(--primary-orange-color);
		background-color: var(--primary-orange-15-color);
	}
}
</style>
