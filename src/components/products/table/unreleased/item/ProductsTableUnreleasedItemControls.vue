<template>
	<div class="products-table-unreleased-item-controls">
		<button class="products-table-unreleased-item-controls__button">
			<v-icon-calendar @click="calendarHandler" />
		</button>
		<button class="products-table-unreleased-item-controls__button">
			<v-icon-edit @click="editHandler" />
		</button>
		<button class="products-table-unreleased-item-controls__button">
			<v-icon-trash @click="removeHandler" />
		</button>
	</div>
</template>

<script>
export default {
	name: 'ProductsTableUnreleasedItemControls',
	emits: ['remove', 'edit', 'calendar'],
	methods: {
		removeHandler() {
			this.$emit('remove');
		},
		editHandler() {
			this.$emit('edit');
		},
		calendarHandler() {
			this.$emit('calendar');
		}
	}
};
</script>

<style scoped lang="scss">
.products-table-unreleased-item-controls {
	display: flex;
	align-items: center;
	gap: 16px;

	&__button {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 8px;
		background-color: var(--neutral-light-black-background-color);
		border-radius: 100%;
		border: none;
		cursor: pointer;
		transition: background-color 0.3s;

		&:deep(svg) {
			width: 20px;
			height: 20px;
		}
	}
}
</style>
