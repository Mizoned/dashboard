<template>
	<div :class="['header-item', { 'header-item--open': isOpen }]">
		<button
			:class="['header-item__head', { 'header-item__head--active': isActive }]"
			@click="clickHandler"
		>
			<slot name="svg"></slot>
		</button>
		<div class="header-item__body">
			<slot name="body"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderItem',
	props: {
		isActive: {
			type: Boolean,
			default: false
		},
		isOpen: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		clickHandler() {
			this.$emit('update:isOpen', !this.isOpen);
		}
	}
};
</script>

<style scoped lang="scss">
.header-item {
	position: relative;

	&__head {
		position: relative;
		width: 48px;
		height: 48px;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;

		&--active {
			&::after {
				content: '';
				position: absolute;
				top: 10px;
				right: 10px;
				width: 10px;
				height: 10px;
				background-color: var(--primary-orange-color);
				border-radius: 100%;
				border: 2px solid var(--neutral-light-black-background-color);
				transition: all 0.3s;
			}
		}
	}

	&__body {
		position: absolute;
		top: calc(100% + 18px);
		right: 0;
		visibility: hidden;
		opacity: 0;
		background-color: var(--neutral-light-black-background-color);
		border: 2px solid var(--neutral-dark-gray-background-color);
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0px 40px 64px -12px rgba(0, 0, 0, 0.08), 0px 0px 14px -4px rgba(0, 0, 0, 0.05),
			0px 32px 48px -8px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(16px);
		transition: background-color 0.3s, border 0.3s, visibility 0.3s, opacity 0.3s;

		@media only screen and (max-width: 768px) {
			top: 100%;
			right: 0;
			left: 0;
			height: calc(100vh - 80px);
			border: none;
			border-radius: unset;
		}
	}

	&--open {
		.header-item__body {
			visibility: visible;
			opacity: 1;
		}

		.header-item__head:deep(svg) {
			path {
				fill: var(--neutral-champagne-background-color);
			}
		}
	}

	&:hover {
		.header-item__head {
			&:deep(svg) {
				path {
					fill: var(--neutral-champagne-background-color);
				}
			}
		}
	}

	@media only screen and (max-width: 768px) {
		position: static;
	}
}
</style>
