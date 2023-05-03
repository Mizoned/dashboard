<template>
	<div class="products-table-unreleased-header">
		<div class="products-table-unreleased-header__item"><v-checkbox /></div>
		<div v-for="column in columns" :key="column" class="products-table-unreleased-header__item">
			{{ column }}
		</div>
		<div class="products-table-unreleased-header__item">Actions</div>
	</div>
</template>

<script>
import VCheckbox from '@/components/UI/VCheckbox.vue';

export default {
	name: 'ProductsTableUnreleasedHeader',
	components: { VCheckbox },
	props: {
		columns: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style scoped lang="scss">
.products-table-unreleased-header {
	display: table-row;
	border-radius: 8px;
	background-color: var(--neutral-light-black-background-color);
	transition: background-color 0.3s;

	&__item {
		position: relative;
		display: table-cell;
		vertical-align: middle;
		padding: 12px 16px;
		font-style: normal;
		font-weight: 600;
		font-size: 13px;
		line-height: 16px;
		letter-spacing: -0.01em;
		color: var(--primary-dark-white-color);

		&:after {
			content: '';
			position: absolute;
			left: 0;
			bottom: -8px;
			right: 0;
			height: 1px;
			background: var(--neutral-dark-gray-background-color);
			transition: background-color 0.3s;
		}

		&:first-child {
			width: 24px;
			padding: 12px 16px 12px 12px;
		}

		&:last-child {
			padding: 12px 12px 12px 16px;
		}
	}
}
</style>
