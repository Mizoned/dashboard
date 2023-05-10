<template>
	<header-item
		v-click-outside="clickOutsideHandler"
		:is-active="true"
		:is-open="isOpen"
		@update:is-open="clickHandler"
	>
		<template #svg><v-icon-message :is-active="isOpen" /></template>
		<template #body>
			<div class="messages">
				<div class="messages__header">
					<div class="messages__title">Message</div>
					<actions-button>
						<action-button-option svg-component-name="VIconCheck" label="Mark as read" />
						<action-button-option svg-component-name="VIconTrash" label="Delete message" />
					</actions-button>
				</div>
				<div class="messages__list">
					<message-item
						v-for="n in 8"
						:key="n"
						:is-new="true"
						name="Reuben Ward"
						message="When do you release the coded template"
						time="03:20PM"
					/>
				</div>
				<v-button class="messages__button" label="View in message center" color="primary" />
			</div>
		</template>
	</header-item>
</template>

<script>
import MessageItem from '@/components/UI/Header/VMessageItem.vue';
import HeaderItem from '@/components/UI/Header/VHeaderItem.vue';
import VButton from '@/components/UI/VButton.vue';
import ActionsButton from '@/components/UI/ActionsButton.vue';
import ActionButtonOption from '@/components/UI/ActionButtonOption.vue';

export default {
	name: 'VMessages',
	components: { ActionButtonOption, ActionsButton, VButton, HeaderItem, MessageItem },
	props: {
		isOpen: {
			type: Boolean,
			default: false
		}
	},
	emits: ['update:isOpen'],
	methods: {
		clickHandler(value) {
			this.$emit('update:isOpen', { name: 'messages', value });
		},
		clickOutsideHandler() {
			if (!this.isOpen) return;
			this.$emit('update:isOpen', { name: 'messages', value: false });
		}
	}
};
</script>

<style scoped lang="scss">
.messages {
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
