<template>
	<router-link :to="href" class="sidebar-sub-link-element" exact-active-class="active">
		<div class="sidebar-sub-link-element__head">{{ label }}</div>
		<div class="sidebar-sub-link-element__icons">
			<!--TODO: Доделать стрелку-->
			<v-counter
				v-if="counter && counterColor"
				:quantity="counter"
				:color="counterColor"
			></v-counter>
		</div>
	</router-link>
</template>

<script>
import VCounter from '@/components/VCounter.vue';

export default {
	name: 'SidebarSubLinkElement',
	components: { VCounter },
	props: {
		label: {
			type: String,
			required: true
		},
		href: {
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
		}
	}
};
</script>

<style scoped lang="scss">
.sidebar-sub-link-element {
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
	position: relative;

	&__head {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	&:hover {
		background-color: var(--neutral-dark-gray-background-color);
		color: var(--neutral-champagne-color);
	}

	&.active {
		color: var(--neutral-champagne-color);
		background-color: var(--neutral-dark-gray-background-color);
		box-shadow: inset 0px -2px 1px rgba(0, 0, 0, 0.4), inset 0px 1px 1px rgba(255, 255, 255, 0.11);
	}

	&:before {
		content: '';
		position: absolute;
		top: 12px;
		left: -13px;
		width: 14px;
		height: 14px;
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1 1V5C1 9.41828 4.58172 13 9 13H13' stroke='%23272B30' stroke-width='2' stroke-linecap='round'/%3e%3c/svg%3e");
		transition: background-image 0.3s;
	}
}

.light-theme {
	.sidebar-sub-link-element {
		&:before {
			content: '';
			position: absolute;
			top: 12px;
			left: -13px;
			width: 14px;
			height: 14px;
			background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1 1V5C1 9.41828 4.58172 13 9 13H13' stroke='%23EFEFEF' stroke-width='2' stroke-linecap='round'/%3e%3c/svg%3e ");
		}
	}
}
</style>
