<template>
	<div class="v-view-switch">
		<div :class="['v-view-switch__item', { selected: modelValue }]" @click="changeHandler('list')">
			<v-icon-list class="v-view-switch__list" />
		</div>
		<div :class="['v-view-switch__item', { selected: !modelValue }]" @click="changeHandler('grid')">
			<v-icon-grid class="v-view-switch__grid" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'VViewSwitch',
	props: {
		modelValue: {
			type: Boolean,
			default: true
		}
	},
	emits: ['update:modelValue'],
	methods: {
		changeHandler(name) {
			this.$emit('update:modelValue', name === 'list');
		}
	}
};
</script>

<style scoped lang="scss">
.v-view-switch {
	display: flex;
	align-items: center;
	gap: 12px;

	&__item {
		display: flex;
		align-items: center;
		justify-self: center;
		border-radius: 8px;
		padding: 8px;
		cursor: pointer;
		transition: background-color 0.3s, box-shadow 0.3s;

		&.selected {
			background-color: var(--neutral-dark-black-background-color);
			box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.1), inset 0px -1px 1px rgba(0, 0, 0, 0.04),
				inset 0px 2px 0px rgba(255, 255, 255, 0.05);

			&:deep(svg) {
				path {
					fill: var(--neutral-champagne-background-color);
				}
			}
		}
	}
}

.light-theme {
	.v-view-switch {
		&__item.selected {
			box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.1), inset 0px -1px 1px rgba(0, 0, 0, 0.04),
				inset 0px 2px 0px rgba(255, 255, 255, 0.25);
		}
	}
}
</style>
