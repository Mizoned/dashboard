<template>
	<router-link :to="href" :class="['v-button-link', `v-button-link--${color}`]">
		<component is="VIconPreloader" v-if="isLoading" />
		<component :is="beforeSvgComponentName" v-else-if="beforeSvgComponentName" />
		<span>{{ label }}</span>
		<component :is="afterSvgComponentName" v-if="afterSvgComponentName" />
	</router-link>
</template>

<script>
export default {
	name: 'VButtonLink',
	props: {
		label: {
			type: String,
			default: 'Button'
		},
		color: {
			type: String,
			default: 'primary'
		},
		beforeSvgComponentName: {
			type: String,
			required: false
		},
		afterSvgComponentName: {
			type: String,
			required: false
		},
		isLoading: {
			type: Boolean,
			default: false
		},
		href: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			topicTypes: {
				primary: 'primary',
				secondary: 'secondary'
			}
		};
	}
};
</script>

<style scoped lang="scss">
.v-button-link {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 20px;
	gap: 8px;
	border: 2px solid transparent;
	border-radius: 12px;
	cursor: pointer;
	font-weight: 700;
	font-size: 15px;
	text-decoration: none;
	line-height: 24px;
	letter-spacing: -0.01em;
	transition: border 0.3s, color 0.3s, background-color 0.3s;

	&:disabled {
		pointer-events: none;
		opacity: 0.5;
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
}
</style>
