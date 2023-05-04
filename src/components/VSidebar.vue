<template>
	<div
		v-click-outside="onClickOutsideHandler"
		:class="['sidebar', { 'sidebar--open': isSidebarOpen }]"
	>
		<div class="sidebar__header">
			<v-icon-close class="sidebar__header-close" @click="sidebarOpenHandler(false)" />
			<v-logotype class="sidebar__logotype" />
		</div>
		<div class="sidebar__menu">
			<template v-for="item in menuItems" :key="item.name">
				<sidebar-element-dropdown
					v-if="item?.children?.length"
					:class="['sidebar-item', { wide: isSidebarOpen }]"
					:label="item.name"
					:children="item.children"
					:individual-children="item.individualChildren"
					:icon-component-name="item.iconComponentName"
					@click="sidebarOpenHandler(true)"
				/>
				<v-link-with-icon
					v-else
					class="sidebar-item"
					:label="item.name"
					:href="item.href"
					:icon-component-name="item.iconComponentName"
				/>
			</template>
		</div>
		<div class="sidebar__footer">
			<v-divider :height="2" />
			<v-link-with-icon
				class="sidebar-item"
				label="Help & getting started"
				href="/help"
				icon-component-name="VIconHelp"
				:counter="8"
				counter-color="purple"
			/>
			<theme-switcher></theme-switcher>
		</div>
	</div>
</template>

<script>
import VLogotype from '@/components/VLogotype.vue';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';
import SidebarElementDropdown from '@/components/UI/Sidebar/SidebarElementDropdown.vue';
import { mapState, mapActions } from 'vuex';

export default {
	name: 'VSidebar',
	components: { SidebarElementDropdown, ThemeSwitcher, VLogotype },
	data() {
		return {
			menuItems: [
				{
					name: 'Home',
					href: '/',
					iconComponentName: 'VIconHome'
				},
				{
					name: 'Products',
					iconComponentName: 'VIconDiamond',
					individualChildren: {
						name: 'New product',
						href: '/product-add',
						iconComponentName: 'VIconCircleAdd'
					},
					children: [
						{
							name: 'Dashboard',
							href: '/products-dashboard'
						},
						{
							name: 'Drafts',
							href: '/product-drafts',
							counter: 2,
							counterColor: 'orange'
						},
						{
							name: 'Released',
							href: '/products-released'
						},
						{
							name: 'Comments',
							href: '/products-comments'
						},
						{
							name: 'Scheduled',
							href: '/product-scheduled',
							counter: 8,
							counterColor: 'green'
						}
					]
				},
				{
					name: 'Customers',
					iconComponentName: 'VIconProfileCircled',
					children: [
						{
							name: 'Overview',
							href: '/customer-overview'
						},
						{
							name: 'Customer list',
							href: '/customer-list'
						}
					]
				},
				{
					name: 'Shop',
					href: '/shop',
					iconComponentName: 'VIconStore'
				},
				{
					name: 'Income',
					iconComponentName: 'VIconPieChart',
					children: [
						{
							name: 'Earning',
							href: '/income-earning'
						},
						{
							name: 'Refunds',
							href: '/income-refunds'
						},
						{
							name: 'Payouts',
							href: '/income-payouts'
						},
						{
							name: 'Statements',
							href: '/income-statements'
						}
					]
				},
				{
					name: 'Promote',
					href: '/promote',
					iconComponentName: 'VIconPromotion'
				}
			]
		};
	},
	computed: {
		...mapState({
			isSidebarOpen: (state) => state.sidebar.isSidebarOpen
		})
	},
	methods: {
		...mapActions({
			sidebarOpenHandler: 'sidebar/sidebarOpenHandler'
		}),
		onClickOutsideHandler() {
			if (this.isSidebarOpen) {
				this.sidebarOpenHandler(false);
			}
		}
	}
};
</script>

<style scoped lang="scss">
.sidebar {
	display: flex;
	gap: 48px;
	width: 100%;
	padding: 24px;
	flex-direction: column;
	background-color: var(--neutral-light-black-background-color);
	transition: width 0.3s, background-color 0.3s, transform 0.3s;
	overflow-y: auto;
	z-index: 6;

	&::-webkit-scrollbar {
		width: 0;
	}

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;

		&-close {
			display: none;

			@media screen and (max-width: 768px) {
				display: block;
			}
		}
	}

	&__menu {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	&__footer {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin-top: auto;
		transition: border-color 0.3s;
	}

	@media screen and (max-width: 1250px) {
		&:deep(.v-link-with-icon__name) {
			display: none;
		}
		&:deep(.v-link-with-icon__icons) {
			display: none;
		}
	}

	@media screen and (max-width: 768px) {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		transform: translateX(-100%);
		width: 100%;

		&:deep(.v-link-with-icon__name) {
			display: block;
		}

		&:deep(.v-link-with-icon__icons) {
			display: flex;
		}
	}

	&--open {
		&:deep(.v-link-with-icon) {
			.v-link-with-icon__name {
				@media screen and (max-width: 1250px) {
					display: block;
				}
			}

			.v-link-with-icon__icons {
				@media screen and (max-width: 1250px) {
					display: flex;
				}
			}
		}

		@media screen and (max-width: 1250px) {
			width: 360px;
		}

		@media screen and (max-width: 768px) {
			width: 100%;
			transform: translateX(0);
		}
	}
}
</style>
