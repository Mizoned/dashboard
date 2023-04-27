<template>
	<div :class="['v-input', { 'v-input--error': isError }]">
		<input class="v-input__input" v-bind="$attrs" :value="modelValue" @input="update" />
		<div v-if="isError" class="v-input__error">{{ errorMessage }}</div>
	</div>
</template>

<script>
export default {
	name: 'VInput',
	props: {
		modelValue: [String],
		labelText: {
			type: String,
			default: ''
		},
		isError: {
			type: Boolean,
			default: false
		},
		errorMessage: {
			type: String,
			default: ''
		},
		tooltipMessage: {
			type: String,
			default: ''
		}
	},
	methods: {
		update(event) {
			this.$emit('update:modelValue', event.target.value);
		}
	}
};
</script>

<style scoped lang="scss">
.v-input {
	&__error {
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 12px;
		padding: 12px 12px 0 12px;
		letter-spacing: -0.01em;
		color: var(--primary-orange-color);
	}

	&__input {
		padding: 10px 10px;
		background-color: var(--neutral-dark-gray-background-color);
		border: 2px solid transparent;
		border-radius: 12px;
		font-weight: 600;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: -0.01em;
		width: 100%;
		color: var(--neutral-champagne-color);
		transition: color 0.3s, background-color 0.3s, border-color 0.3s;
		outline: none;

		&:focus {
			border-color: var(--primary-blue-color);
			background-color: var(--neutral-dark-black-background-color);
		}

		&:focus-visible {
			border-color: var(--primary-blue-color);
			background-color: var(--neutral-dark-black-background-color);
		}

		&::placeholder {
			color: var(--neutral-shade-dark-04-40-color);
		}

		&:hover {
			&::placeholder {
				color: var(--primary-dark-white-color);
			}
		}
	}

	&--error {
		.v-input__input {
			background-color: var(--primary-orange-15-color);
			border: 2px solid var(--primary-orange-color);
			color: var(--primary-orange-color);
		}
	}
}
</style>
