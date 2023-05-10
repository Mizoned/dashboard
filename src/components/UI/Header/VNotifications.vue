<template>
	<header-item
		v-click-outside="clickOutsideHandler"
		:is-active="true"
		:is-open="isOpen"
		@update:is-open="clickHandler"
	>
		<template #svg><v-icon-notification :is-active="isOpen" /></template>
		<template #body>
			<div class="notifications">
				<div class="notifications__header">
					<div class="notifications__title">Notification</div>
					<actions-button>
						<action-button-option svg-component-name="VIconCheck" label="Mark as read"/>
						<action-button-option svg-component-name="VIconTrash" label="Delete notification"/>
					</actions-button>
				</div>
				<div class="notifications__list">
					<notification-item
						:is-new="true"
						name="Anastasia Ward"
						message="Smiles – 3D icons"
						time="1h"
						type="comment"
					></notification-item>
					<notification-item
						:is-new="true"
						name="Anna Casper"
						message="Smiles – 3D icons"
						time="2h"
						type="like"
					></notification-item>
					<notification-item
						:is-new="true"
						name="Evalyn Jenkins"
						message="Smiles – 3D icons"
						time="3h"
						type="purchase"
					></notification-item>
					<notification-item
						:is-new="true"
						name="Agata Waelchi"
						message="Smiles – 3D icons"
						time="8h"
						type="rate"
						:rate="5"
					></notification-item>
				</div>
				<v-button class="notifications__button" label="See all notifications" color="primary" />
			</div>
		</template>
	</header-item>
</template>

<script>
import HeaderItem from '@/components/UI/Header/VHeaderItem.vue';
import NotificationItem from '@/components/UI/Header/VNotificationItem.vue';
import ActionsButton from '@/components/UI/ActionsButton.vue';
import ActionButtonOption from '@/components/UI/ActionButtonOption.vue';
import VButton from '@/components/UI/VButton.vue';

export default {
	name: 'VNotifications',
	components: { VButton, ActionButtonOption, ActionsButton, NotificationItem, HeaderItem },
	props: {
		isOpen: {
			type: Boolean,
			default: false
		}
	},
	emits: ['update:isOpen'],
	methods: {
		clickHandler(value) {
			this.$emit('update:isOpen', { name: 'notifications', value });
		},
		clickOutsideHandler() {
			if (!this.isOpen) return;
			this.$emit('update:isOpen', { name: 'notifications', value: false });
		}
	}
};
</script>

<style scoped lang="scss">
.notifications {
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 12px;
	width: 392px;
	height: inherit;
	max-height: inherit;

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__title {
		font-weight: 600;
		font-size: 20px;
		line-height: 32px;
		letter-spacing: -0.02em;
		color: var(--neutral-champagne-color);
		margin-left: 12px;
		transition: color 0.3s;
	}

	&__list {
		display: flex;
		flex-direction: column;
		gap: 8px;
		overflow-y: auto;
		min-height: 0;
		overflow-x: hidden;
		flex: 1 1 auto;

		@media only screen and (max-width: 768px) {
			overflow-y: auto;
			margin: 0 -8px;
			padding: 0 4px 0 8px;
		}
	}

	&__button {
		margin-top: 12px;
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
}
</style>
