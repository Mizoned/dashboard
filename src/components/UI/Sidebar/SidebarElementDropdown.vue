<template>
	<div :class="['sidebar-item-dropdown', { open: isOpen }, { active: isHaveActiveElement }]">
		<button :class="['sidebar-item-dropdown__button']" @click="openHandler">
			<span class="sidebar-item-dropdown__head">
				<component
					:is="iconComponentName"
					v-if="iconComponentName"
					:is-active="isHaveActiveElement"
				/>
				<span class="sidebar-item-dropdown__name">{{ label }}</span>
			</span>
			<span class="sidebar-item-dropdown__icons">
				<v-counter
					v-if="counter && counterColor"
					:quantity="counter"
					:color="counterColor"
				></v-counter>
				<svg
					class="sidebar-item-dropdown__arrow"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6 9L12 15L18 9"
						stroke="#6F767E"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</span>
		</button>
		<div class="sidebar-item-dropdown__body">
			<sidebar-sub-link-element
				v-for="child in children"
				:key="child.name"
				:href="child.href"
				:label="child.name"
				:counter="child.counter"
				:counter-color="child.counterColor"
			></sidebar-sub-link-element>
		</div>
	</div>
</template>

<script>
import VCounter from '@/components/VCounter.vue';
import SidebarSubLinkElement from '@/components/UI/Sidebar/SidebarSubLinkElement.vue';

export default {
	name: 'SidebarElementDropdown',
	components: { SidebarSubLinkElement, VCounter },
	props: {
		label: {
			type: String,
			required: true
		},
		counter: {
			type: Number,
			default: 0
		},
		counterColor: {
			type: String,
			default: ''
		},
		children: {
			type: Array,
			default: () => []
		},
		iconComponentName: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			isOpen: false
		};
	},
	computed: {
		isHaveActiveElement() {
			return !!this.children.find((child) => child.href === this.$route.path);
		}
	},
	methods: {
		openHandler() {
			this.isOpen = !this.isOpen;
		}
	}
};
</script>

<style scoped lang="scss">
.sidebar-item-dropdown {
	&__button {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 24px;
		width: 100%;
		padding: 10px;
		border-radius: 12px;
		cursor: pointer;
		background-color: transparent;
		border: 2px solid transparent;
		font-weight: 600;
		font-size: 15px;
		line-height: 24px;
		letter-spacing: -0.01em;
		color: var(--primary-dark-white-color);
		transition: color 0.3s, background-color 0.3s, border-color 0.3s;

		&:hover {
			color: var(--neutral-champagne-color);

			.sidebar-item-dropdown__head:deep(svg) {
				path {
					fill: var(--neutral-champagne-background-color);
				}
			}
			.sidebar-item-dropdown__arrow {
				path {
					stroke: var(--neutral-champagne-background-color);
				}
			}
		}
	}

	&.active {
		.sidebar-item-dropdown__button {
			background-color: var(--neutral-dark-gray-background-color);
		}

		.sidebar-item-dropdown__head {
			color: var(--neutral-champagne-color);

			&:deep(svg) {
				path {
					fill: var(--neutral-champagne-color);
				}
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

		@media screen and (max-width: 1250px) {
			display: none;
		}

		@media screen and (max-width: 768px) {
			display: block;
		}
	}

	&__icons {
		display: flex;
		align-items: center;
		gap: 12px;

		@media screen and (max-width: 1250px) {
			display: none;
		}

		@media screen and (max-width: 768px) {
			display: flex;
		}
	}

	&__arrow {
		width: 24px;
		height: 24px;
		transition: transform 0.3s;
	}

	&__body {
		display: none;
		flex-direction: column;
		position: relative;
		padding: 0 0 0 36px;
		background-color: transparent;
		border: unset;
		box-shadow: unset;
		transition: color 0.3s, background-color 0.3s, border-color 0.3s;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 23px;
			bottom: 32px;
			width: 2px;
			border-radius: 2px;
			background-color: var(--neutral-dark-gray-background-color);
			transition: background-color 0.3s;
		}
	}

	&.open {
		.sidebar-item-dropdown {
			&__body {
				display: flex;

				@media screen and (max-width: 1250px) {
					display: none;
				}
			}

			&__arrow {
				transform: rotate(180deg);
			}
		}
	}
}

.sidebar--open {
	.sidebar-item-dropdown {
		&.active {
			.sidebar-item-dropdown__button {
				background-color: transparent;
			}
		}
		&.wide.open {
			.sidebar-item-dropdown__body {
				display: flex;
			}
		}
		&__name {
			@media screen and (max-width: 1250px) {
				display: block;
			}
		}
		&__icons {
			@media screen and (max-width: 1250px) {
				display: flex;
			}
		}
	}
}
</style>
