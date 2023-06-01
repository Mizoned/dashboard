<template>
	<div :class="['v-textarea', { 'v-textarea--error': isError }]">
		<textarea :value="modelValue" class="v-textarea__textarea" v-bind="$attrs" rows="4" @input="update" />
		<div v-if="isError" class="v-textarea__error">{{ errorMessage }}</div>
	</div>
</template>

<script>
export default {
	name: 'VTextarea',
	props: {
		modelValue: {
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
	},
	emits: ['update:modelValue'],
	methods: {
		update(event) {
			this.$emit('update:modelValue', event.target.value);
		}
	}
};
</script>

<style scoped lang="scss">
.v-textarea {
	&__textarea {
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
		resize: none;
		overflow-y: auto;

		&::-webkit-scrollbar {
			width: 4px;
			border-radius: 12px;
		}

		&::-webkit-scrollbar-track {
			background: transparent;
			border-radius: 12px;
			margin: 10px 0;
		}

		&::-webkit-scrollbar-thumb {
			background: var(--primary-blue-color);
			border-radius: 12px;
		}

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

	&__error {
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 12px;
		padding: 12px 12px 0 12px;
		letter-spacing: -0.01em;
		color: var(--primary-orange-color);
	}

	&--error {
		.v-textarea__textarea {
			background-color: var(--primary-orange-15-color);
			border: 2px solid var(--primary-orange-color);
			color: var(--primary-orange-color);
		}
	}
}
</style>
