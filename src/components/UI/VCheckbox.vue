<template>
	<label class="v-checkbox">
		<input
			class="v-checkbox__input"
			type="checkbox"
			v-bind="$attrs"
			:checked="modelValue"
			@input="update"
		/>
		<span class="v-checkbox__box"></span>
		<span v-if="label" class="v-checkbox__label">{{ label }}</span>
	</label>
</template>

<script>
export default {
	name: 'VCheckbox',
	props: {
		modelValue: {
			type: Boolean,
			default: false
		},
		label: {
			type: String,
			default: ''
		}
	},
	emits: ['update:modelValue'],
	methods: {
		update(event) {
			this.$emit('update:modelValue', event.target.checked);
		}
	}
};
</script>

<style scoped lang="scss">
.v-checkbox {
	position: relative;
	display: flex;
	align-items: center;
	gap: 12px;

	&__input {
		position: absolute;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

	&__box {
		display: block;
		flex-shrink: 0;
		width: 24px;
		height: 24px;
		background-color: var(--neutral-light-black-background-color);
		border: 2px solid var(--neutral-shade-dark-04-40-background-color);
		border-radius: 6px;
		transition: border-color 0.3s, background-color 0.3s, background-image 0.3s;
		cursor: pointer;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			width: 24px;
			height: 24px;
			background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L12.1213 16.2929C10.9497 17.4645 9.05026 17.4645 7.87868 16.2929L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929C4.68342 10.9024 5.31658 10.9024 5.70711 11.2929L9.29289 14.8787C9.68342 15.2692 10.3166 15.2692 10.7071 14.8787L19.2929 6.29289C19.6834 5.90237 20.3166 5.90237 20.7071 6.29289Z' fill='%23FCFCFC'/%3e%3c/svg%3e ");
			opacity: 0;
			visibility: hidden;
			transition: opacity 0.3s, visibility 0.3s;
			background-position: center;
		}
	}

	&__input:checked + &__box {
		background-color: var(--primary-blue-color);
		border: 2px solid transparent;

		&::after {
			opacity: 1;
			visibility: visible;
		}
	}

	&__input:focus + &__box {
		border: 2px solid var(--primary-blue-color);
	}

	&__input:disabled + &__box {
		pointer-events: none;
		border-color: var(--neutral-dark-gray-background-color);
	}

	&__input:checked:disabled + &__box {
		pointer-events: none;
		background-color: var(--primary-blue-color);
		border: 2px solid transparent;
		opacity: 0.8;

		&::after {
			opacity: 1;
			visibility: visible;
		}
	}

	&__label {
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: -0.01em;
		color: var(--neutral-champagne-color);
		transition: color 0.3s;
		hyphens: auto;
	}
}
</style>
