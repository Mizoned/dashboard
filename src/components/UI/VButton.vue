<template>
	<button :class="['v-button', `v-button--${color}`, `v-button--${size}`]">
		<component :is="iconLoaderName" v-if="isLoading" />
		<component :is="beforeSvgComponentName" v-else-if="beforeSvgComponentName" />
		<span v-if="label" class="v-button__label">{{ label }}</span>
		<component :is="afterSvgComponentName" v-if="afterSvgComponentName" />
	</button>
</template>

<script>
export default {
	name: 'VButton',
	props: {
		label: {
			type: String,
			default: ''
		},
		color: {
			type: String,
			default: 'primary'
		},
		size: {
			type: String,
			default: 'lg'
		},
		beforeSvgComponentName: {
			type: String,
			default: ''
		},
		afterSvgComponentName: {
			type: String,
			default: ''
		},
		isLoading: {
			type: Boolean,
			default: false
		},
		iconLoaderName: {
			type: String,
			default: 'VIconPreloader'
		}
	}
};
</script>

<style scoped lang="scss">
.v-button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 18px;
	gap: 8px;
	border: 2px solid transparent;
	border-radius: 12px;
	cursor: pointer;
	font-weight: 700;
	font-size: 15px;
	line-height: 24px;
	letter-spacing: -0.01em;
	transition: border 0.3s, color 0.3s, background-color 0.3s;

	&:deep(svg) {
		flex-shrink: 0;
	}

	&:disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	&__label {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	&--sm {
		padding: 6px 14px;
		border-radius: 8px;
	}

	&--square {
		padding: 8px;
	}

	&--primary {
		background-color: var(--primary-blue-color);
		color: var(--primary-champagne-color);

		&:deep(svg) {
			path {
				fill: var(--primary-champagne-color);
			}
		}

		&:hover {
			background-color: var(--primary-dark-blue-color);
		}
	}

	&--secondary {
		background-color: var(--neutral-light-black-background-color);
		border-color: var(--neutral-dark-gray-background-color);
		color: var(--neutral-champagne-color);

		&:deep(svg) {
			& > path {
				fill: var(--neutral-champagne-background-color);
			}
		}

		&:hover {
			background-color: transparent;
			border-color: var(--neutral-champagne-background-color);
		}
	}

	&--transparent {
		background: transparent;
	}
}
</style>
