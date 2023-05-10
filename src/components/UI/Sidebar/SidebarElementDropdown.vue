<template>
	<div :class="['sidebar-item-dropdown', { open: isOpen }, { active: isHaveActiveElement }]">
		<button
			:class="['sidebar-item-dropdown__button', { active: isHaveIndividualActiveElement }]"
			type="button"
			@click="openHandler"
		>
			<span class="sidebar-item-dropdown__head">
				<component
					:is="iconComponentName"
					v-if="iconComponentName"
					:is-active="isHaveActiveElement || isHaveIndividualActiveElement"
				/>
				<span class="sidebar-item-dropdown__name">{{ label }}</span>
			</span>
			<span class="sidebar-item-dropdown__icons">
				<v-counter
					v-if="counter && counterColor"
					:quantity="counter"
					:color="counterColor"
				></v-counter>
				<router-link
					v-if="individualChildren"
					class="sidebar-item-dropdown__individual"
					:to="individualChildren.href"
					><component :is="individualChildren.iconComponentName"></component
				></router-link>
				<v-icon-chevron class="sidebar-item-dropdown__arrow" :direction="isOpen ? 'up' : 'down'" />
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
		},
		individualChildren: {
			type: Object,
			default: () => {}
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
		},
		isHaveIndividualActiveElement() {
			return this?.individualChildren?.href === this.$route.path;
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
		padding: 12px;
		border-radius: 12px;
		cursor: pointer;
		background-color: transparent;
		box-shadow: unset;
		border: none;
		font-weight: 600;
		font-size: 15px;
		line-height: 24px;
		letter-spacing: -0.01em;
		transition: color 0.3s, background-color 0.3s, border-color 0.3s, box-shadow 0.3s;

		&:hover {
			background-color: var(--neutral-dark-gray-background-color);
			color: var(--neutral-champagne-color);

			.sidebar-item-dropdown__head:deep(svg) {
				path {
					fill: var(--neutral-champagne-background-color);
				}
			}

			.sidebar-item-dropdown__name {
				color: var(--neutral-champagne-color);
			}

			.sidebar-item-dropdown__arrow {
				&:deep(path) {
					stroke: var(--neutral-champagne-background-color);
				}
			}
		}

		&.active {
			background-color: var(--neutral-dark-gray-background-color);
			box-shadow: inset 0px -2px 1px rgba(0, 0, 0, 0.4), inset 0px 1px 1px rgba(255, 255, 255, 0.11);

			.sidebar-item-dropdown__head:deep(svg) {
				path {
					fill: var(--neutral-champagne-background-color);
				}
			}

			.sidebar-item-dropdown__individual:deep(svg) {
				path {
					stroke: var(--neutral-champagne-background-color);
				}
				rect {
					stroke: var(--neutral-champagne-background-color);
				}
			}

			.sidebar-item-dropdown__name {
				color: var(--neutral-champagne-color);
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
		color: var(--primary-dark-white-color);
		transition: color 0.3s;

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

	&__individual {
		display: flex;
	}

	&__arrow {
		width: 24px;
		height: 24px;
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

	&.active {
		.sidebar-item-dropdown {
			&__button {
				background-color: var(--neutral-dark-gray-background-color);
				box-shadow: inset 0px -2px 1px rgba(0, 0, 0, 0.4),
					inset 0px 1px 1px rgba(255, 255, 255, 0.11);
			}

			&__head {
				&:deep(svg) {
					path {
						fill: var(--neutral-champagne-color);
					}
				}
			}

			&__name {
				color: var(--neutral-champagne-color);
			}

			&__arrow {
				path {
					stroke: var(--neutral-champagne-color);
				}
			}
		}
	}

	&.open {
		.sidebar-item-dropdown {
			&__button {
				background-color: transparent;
				box-shadow: unset;
			}

			&__head {
				&:deep(svg) {
					path {
						fill: var(--primary-dark-white-color);
					}
				}
			}

			&__name {
				color: var(--primary-dark-white-color);
			}

			&__icons {
				path {
					stroke: var(--primary-dark-white-color);
				}
			}

			&__body {
				display: flex;

				@media screen and (max-width: 1250px) {
					display: none;
				}
			}
		}

		&:not(.active) .sidebar-item-dropdown {
			&__button {
				background-color: var(--neutral-dark-gray-background-color);
				box-shadow: inset 0px -2px 1px rgba(0, 0, 0, 0.4),
					inset 0px 1px 1px rgba(255, 255, 255, 0.11);
			}

			&__head {
				&:deep(svg) {
					path {
						fill: var(--neutral-champagne-color);
					}
				}
			}

			&__name {
				color: var(--neutral-champagne-color);
			}

			&__arrow {
				path {
					stroke: var(--neutral-champagne-background-color);
				}
			}
		}

		@media screen and (max-width: 1250px) {
			&:not(.wide) .sidebar-item-dropdown {
				&__button {
					background-color: var(--neutral-dark-gray-background-color);
					box-shadow: inset 0px -2px 1px rgba(0, 0, 0, 0.4),
						inset 0px 1px 1px rgba(255, 255, 255, 0.11);
				}

				&__head {
					&:deep(svg) {
						path {
							fill: var(--neutral-champagne-color);
						}
					}
				}
			}

			&:not(.wide):not(.active) .sidebar-item-dropdown {
				&__button {
					background-color: transparent;
					box-shadow: unset;

					&.active {
						background-color: var(--neutral-dark-gray-background-color) !important;
						box-shadow: inset 0px -2px 1px rgba(0, 0, 0, 0.4),
							inset 0px 1px 1px rgba(255, 255, 255, 0.11) !important;

						.sidebar-item-dropdown__head:deep(svg) {
							path {
								fill: var(--neutral-champagne-background-color) !important;
							}
						}

						.sidebar-item-dropdown__name {
							color: var(--neutral-champagne-color) !important;
						}
					}
				}

				&__head {
					&:deep(svg) {
						path {
							fill: var(--primary-dark-white-color);
						}
					}
				}
			}
		}
	}
}

.sidebar--open {
	.sidebar-item-dropdown {
		&__name {
			@media screen and (max-width: 1250px) {
				display: flex;
			}
		}

		&__icons {
			@media screen and (max-width: 1250px) {
				display: flex;
			}
		}
	}

	.sidebar-item-dropdown.open {
		.sidebar-item-dropdown {
			&__body {
				@media screen and (max-width: 1250px) {
					display: flex;
				}
			}
		}
	}
}
</style>
