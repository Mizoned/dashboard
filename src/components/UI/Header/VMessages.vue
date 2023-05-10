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
						<action-button-option>
							<template #svg
								><svg
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M20.7071 6.30266C21.0976 6.69318 21.0976 7.32635 20.7071 7.71687L12.1213 16.3027C10.9497 17.4742 9.05026 17.4742 7.87868 16.3027L4.29289 12.7169C3.90237 12.3263 3.90237 11.6932 4.29289 11.3027C4.68342 10.9121 5.31658 10.9121 5.70711 11.3027L9.29289 14.8884C9.68342 15.279 10.3166 15.279 10.7071 14.8884L19.2929 6.30266C19.6834 5.91213 20.3166 5.91213 20.7071 6.30266Z"
										fill="#6F767E"
									/></svg
							></template>
							<template #label>Mark as read</template>
						</action-button-option>
						<action-button-option>
							<template #svg
								><svg
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M10 10.0098C10.5523 10.0098 11 10.4575 11 11.0098V16.0098C11 16.5621 10.5523 17.0098 10 17.0098C9.44772 17.0098 9 16.5621 9 16.0098V11.0098C9 10.4575 9.44772 10.0098 10 10.0098Z"
										fill="#6F767E"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M14 10.0098C14.5523 10.0098 15 10.4575 15 11.0098V16.0098C15 16.5621 14.5523 17.0098 14 17.0098C13.4477 17.0098 13 16.5621 13 16.0098V11.0098C13 10.4575 13.4477 10.0098 14 10.0098Z"
										fill="#6F767E"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M10 2.00977C8.34315 2.00977 7 3.35291 7 5.00977H4H3C2.44772 5.00977 2 5.45748 2 6.00977C2 6.56205 2.44772 7.00977 3 7.00977H4V19.0098C4 20.6666 5.34315 22.0098 7 22.0098H17C18.6569 22.0098 20 20.6666 20 19.0098V7.00977H21C21.5523 7.00977 22 6.56205 22 6.00977C22 5.45748 21.5523 5.00977 21 5.00977H20H17C17 3.35291 15.6569 2.00977 14 2.00977H10ZM15 5.00977C15 4.45748 14.5523 4.00977 14 4.00977H10C9.44772 4.00977 9 4.45748 9 5.00977H15ZM7 7.00977H6V19.0098C6 19.562 6.44772 20.0098 7 20.0098H17C17.5523 20.0098 18 19.562 18 19.0098V7.00977H17H7Z"
										fill="#6F767E"
									/></svg
							></template>
							<template #label>Delete message</template>
						</action-button-option>
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
