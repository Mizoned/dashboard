<template>
	<div class="search">
		<div class="search__head">
			<button v-if="!isFilled" class="search__glass">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L18.0319 16.6177Z"
						fill="#6F767E"
					/>
				</svg>
			</button>
			<button v-else class="search__clear">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10.707 17.7929C11.0975 18.1834 11.0975 18.8166 10.707 19.2071C10.3164 19.5976 9.68327 19.5976 9.29274 19.2071L3.49985 13.4142C2.7188 12.6332 2.7188 11.3668 3.49985 10.5858L9.29274 4.79289C9.68327 4.40237 10.3164 4.40237 10.707 4.79289C11.0975 5.18342 11.0975 5.81658 10.707 6.20711L5.91406 11H19.9998C20.5521 11 20.9998 11.4477 20.9998 12C20.9998 12.5523 20.5521 13 19.9998 13H5.91406L10.707 17.7929Z"
						fill="#2A85FF"
					/>
				</svg>
			</button>
			<input
				:value="modelValue"
				class="search__input"
				placeholder="Search or type a command"
				@input="update"
			/>
			<button v-if="!isFilled" class="search__result">⌘ F</button>
			<button v-else class="search__close">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L10.5858 12L8.29299 9.70714C7.90246 9.31661 7.90246 8.68345 8.29299 8.29292C8.68351 7.9024 9.31668 7.9024 9.7072 8.29292L12 10.5858L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L13.4142 12L15.7072 14.2929C16.0977 14.6835 16.0977 15.3166 15.7072 15.7071C15.3167 16.0977 14.6835 16.0977 14.293 15.7071L12 13.4142L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071Z"
						fill="#6F767E"
					/>
				</svg>
			</button>
		</div>
		<div class="search__body"></div>
	</div>
</template>

<script>
export default {
	name: 'VSearch',
	props: {
		modelValue: {
			type: String,
			default: ''
		}
	},
	emits: ['update:modelValue'],
	computed: {
		isFilled() {
			return !!this.modelValue;
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
.search {
	width: 100%;

	&__head {
		position: relative;
	}

	&__glass,
	&__result,
	&__close,
	&__clear {
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		padding: 0;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		transition: all 0.2s;
		background: none;
		cursor: pointer;
	}

	&__glass,
	&__clear {
		left: 12px;
	}

	&__result,
	&__close {
		right: 12px;
	}

	&__clear {
		&:hover {
			transform: translate(-2px, -50%);
		}
	}

	&__close {
		&:hover {
			svg {
				path {
					fill: var(--primary-orange-color);
				}
			}
		}
	}

	&__input {
		padding: 10px 68px 10px 44px;
		border-radius: 12px;
		background-color: var(--neutral-dark-gray-background-color);
		border: 2px solid transparent;
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		line-height: 24px;
		width: 100%;
		color: var(--neutral-champagne-color);
		caret-color: var(--neutral-champagne-color);
		transition: background-color 0.3s, color 0.3s, caret-color 0.3s, border-color 0.3s;
		outline: 2px solid transparent;

		&:focus {
			border: var(--primary-blue-color) solid 2px;
		}

		&::-moz-placeholder {
			color: var(--neutral-shade-dark-04-40-color);
		}
		&::-webkit-input-placeholder {
			color: var(--neutral-shade-dark-04-40-color);
		}
	}

	&__result {
		&:hover {
			box-shadow: unset;
		}

		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
		color: var(--neutral-champagne-color);
		background-color: var(--neutral-light-black-background-color);
		padding: 4px 12px;
		border-radius: 8px;
		box-shadow: inset 0px -1px 2px rgba(0, 0, 0, 0.05), inset 0px -1px 1px rgba(0, 0, 0, 0.04),
			inset 0px 1px 0px rgba(255, 255, 255, 0.08);
		transition: color 0.3s, background-color 0.3s, box-shadow 0.3s;

		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
}
</style>
