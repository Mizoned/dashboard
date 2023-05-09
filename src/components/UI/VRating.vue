<template>
	<div class="v-rating">
		<component :is="iconComponentName" :is-active="isActive"></component>
		<div v-if="isActive" class="v-rating__value">
			{{ value }} <span v-if="count" class="v-rating__count">({{ count }})</span>
		</div>
		<div v-else class="v-rating__not">No ratings</div>
	</div>
</template>

<script>
import VIconStar from '@/components/icons/VIconStar.vue';

export default {
	name: 'VRating',
	components: [VIconStar],
	props: {
		value: {
			type: [String, Number],
			default: 0
		},
		count: {
			type: [String, Number],
			default: 0
		}
	},
	data() {
		return {
			iconComponentName: 'VIconStar'
		};
	},
	computed: {
		isActive() {
			return this.value > 0;
		}
	}
};
</script>

<style scoped lang="scss">
.v-rating {
	display: flex;
	align-items: center;
	gap: 8px;
	white-space: nowrap;

	&__value,
	&__not {
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: -0.01em;
		color: var(--neutral-champagne-color);
		transition: color 0.3s;
	}

	&__not,
	&__count {
		color: var(--primary-dark-white-color);
	}
}
</style>
