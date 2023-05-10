<template>
	<div class="action-button-option">
		<div v-if="svgComponentName" class="action-button-option__svg">
			<component :is="svgComponentName" />
		</div>
		<div class="action-button-option__label">{{ label }}</div>
	</div>
</template>

<script>
export default {
	name: 'ActionButtonOption',
	props: {
		svgComponentName: {
			type: String,
			default: ''
		},
		label: {
			type: String,
			required: true
		}
	}
};
</script>

<style scoped lang="scss">
.action-button-option {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 12px;
	cursor: pointer;

	&__svg {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__label {
		color: var(--primary-dark-white-color);
		font-weight: 600;
		font-size: 15px;
		line-height: 24px;
		letter-spacing: -0.01em;
		transition: all 0.3s;
	}

	&:deep(svg) {
		path {
			fill: var(--primary-dark-white-color);
		}
	}

	&:hover {
		.action-button-option__label {
			color: var(--neutral-champagne-color);
		}

		&:deep(svg) {
			path {
				fill: var(--neutral-champagne-background-color);
			}
		}
	}
}
</style>
