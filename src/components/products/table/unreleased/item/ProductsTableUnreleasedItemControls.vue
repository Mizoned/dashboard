<template>
	<div class="products-table-unreleased-item-controls">
		<button class="products-table-unreleased-item-controls__button"><v-icon-calendar /></button>
		<button class="products-table-unreleased-item-controls__button"><v-icon-edit /></button>
		<button class="products-table-unreleased-item-controls__button"><v-icon-trash /></button>
	</div>
</template>

<script>
export default {
	name: 'ProductsTableUnreleasedItemControls'
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
