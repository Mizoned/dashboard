<template>
	<router-link
		:to="href"
		exact
		:class="['v-link-with-icon', `v-link-with-icon--${color}`]"
		exact-active-class="active"
	>
		<div class="v-link-with-icon__head">
			<component
				:is="iconComponentName"
				v-if="iconComponentName"
				:is-active="$route.name === label"
			/>
			<span class="v-link-with-icon__name">{{ label }}</span>
		</div>
		<div v-if="counter && counterColor" class="v-link-with-icon__icons">
			<v-counter :quantity="counter" :color="counterColor"></v-counter>
		</div>
	</router-link>
</template>

<script>
import VCounter from '@/components/VCounter.vue';

export default {
	name: 'VLinkWithIcon',
	components: { VCounter },
	props: {
		href: {
			type: String,
			required: true
		},
		label: {
			type: String,
			required: true
		},
		isUseArrow: {
			type: Boolean,
			default: false
		},
		counter: {
			type: Number,
			required: false
		},
		counterColor: {
			type: String,
			required: false,
			default: ''
		},
		iconComponentName: {
			type: String,
			required: false
		},
		color: {
			type: String,
			default: 'white'
		}
	}
};
</script>

<style scoped lang="scss">
.v-link-with-icon {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 24px;
	padding: 12px;
	text-decoration: none;
	color: var(--primary-dark-white-color);
	background-color: transparent;
	box-shadow: unset;
	border-radius: 12px;
	font-weight: 600;
	font-size: 15px;
	line-height: 24px;
	letter-spacing: -0.01em;
	transition: color 0.3s, background-color 0.3s, box-shadow 0.3s;

	&.active {
		color: var(--neutral-champagne-color);
		background-color: var(--neutral-dark-gray-background-color);
		box-shadow: inset 0px -2px 1px rgba(0, 0, 0, 0.4), inset 0px 1px 1px rgba(255, 255, 255, 0.11);

		.v-link-with-icon__head:deep(svg) {
			path {
				fill: var(--neutral-champagne-background-color);
			}
			circle {
				fill: var(--neutral-champagne-background-color);
			}
		}
	}

	&__head {
		display: grid;
		grid-template-columns: 24px 1fr;
		align-items: center;
		gap: 12px;

		&:deep(svg) {
			path {
				fill: var(--primary-dark-white-color);
			}
		}
	}

	&__name {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	&__icons {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	&--white {
		color: var(--primary-dark-white-color);

		&:hover {
			background-color: var(--neutral-dark-gray-background-color);
			color: var(--neutral-champagne-color);

			&:deep(svg) {
				path {
					fill: var(--neutral-champagne-background-color);
				}
			}
		}
	}

	&--purple {
		color: var(--primary-purple-color);

		&:deep(svg) {
			path {
				fill: var(--primary-purple-color);
			}
		}

		&:hover {
			color: var(--primary-purple-color);
			background-color: var(--neutral-dark-gray-background-color);

			&:deep(svg) {
				path {
					fill: var(--primary-purple-color);
				}
			}
		}

		&.active {
			color: var(--primary-purple-color);

			.v-link-with-icon__head:deep(svg) {
				path {
					fill: var(--primary-purple-color);
				}
				circle {
					fill: var(--primary-purple-color);
				}
			}
		}
	}
}
</style>
