<template>
	<header class="header">
		<v-search v-model="search" class="header__search" />
		<div class="header__control">
			<div class="header__item">
				<v-button-link
					href="/product-add"
					class="header__button"
					color="primary"
					label="Create"
					before-svg-component-name="VIconAdd"
				/>
			</div>
			<div class="header__item header-menu">
				<button class="header-menu__button" @click.stop="sidebarOpenHandler(true)">
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
							d="M4 16C4 15.4477 4.44772 15 5 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16Z"
							fill="#6F767E"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M4 8C4 7.44772 4.44772 7 5 7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8Z"
							fill="#6F767E"
						/>
					</svg>
				</button>
			</div>
			<div class="header__item header-search">
				<button class="header-search__button">
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
							d="M18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L18.0319 16.6177ZM18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
							fill="#6F767E"
						/>
					</svg>
				</button>
			</div>
			<messages :is-open="items.messages.state" @update:is-open="clickHandler" />
			<notifications :is-open="items.notifications.state" @update:is-open="clickHandler" />
			<profile :is-open="items.profile.state" @update:is-open="clickHandler" />
		</div>
	</header>
</template>

<script>
import VSearch from '@/components/UI/VSearch.vue';
import VButton from '@/components/UI/VButton.vue';
import Messages from '@/components/UI/Header/Messages.vue';
import Notifications from '@/components/UI/Header/Notifications.vue';
import Profile from '@/components/UI/Header/Profile.vue';
import { mapActions } from 'vuex';

export default {
	name: 'Header',
	components: { Profile, Notifications, Messages, VButton, VSearch },
	data() {
		return {
			search: '',
			activeItem: null,
			items: {
				messages: {
					state: false
				},
				notifications: {
					state: false
				},
				profile: {
					state: false
				}
			}
		};
	},
	methods: {
		...mapActions({
			sidebarOpenHandler: 'sidebar/sidebarOpenHandler'
		}),
		clickHandler(event) {
			if (this.activeItem && this.activeItem === event.name) {
				this.activeItem = null;
			} else {
				if (this.activeItem) {
					this.items[this.activeItem].state = false;
				}
				this.activeItem = event.name;
			}

			this.items[event.name].state = event.value;
		}
	}
};
</script>

<style scoped lang="scss">
.message-test {
	.item__body {
		width: 500px;
	}
}

.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	z-index: 5;
	padding: 24px 40px;
	background-color: var(--neutral-light-black-background-color);
	box-shadow: inset 1px 0 0 var(--neutral-dark-black-background-color),
		inset 0 -1px 0px var(--neutral-dark-black-background-color);
	transition: background-color 0.3s, box-shadow 0.3s;

	&__search {
		width: 360px;
		@media screen and (max-width: 768px) {
			width: 100%;
			display: none;
			position: absolute;
			top: 80px;
			left: 0;
			right: 0;
			padding: 20px;
			background-color: var(--neutral-dark-black-background-color);
		}
	}

	&__control {
		display: flex;
		gap: 24px;

		@media only screen and (max-width: 768px) {
			width: 100%;
			justify-content: space-between;
		}
	}

	@media screen and (max-width: 768px) {
		padding: 16px 24px 16px 16px;
	}

	@media only screen and (max-width: 1024px) {
		&__control &__item:first-child {
			display: none;
		}
	}
}

.header-search {
	display: none;

	&__button {
		position: relative;
		width: 48px;
		height: 48px;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@media screen and (max-width: 768px) {
		display: flex;
	}
}

.header-menu {
	display: none;
	margin-right: auto;

	&__button {
		position: relative;
		width: 48px;
		height: 48px;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@media screen and (max-width: 768px) {
		display: flex;
	}
}

.header-messages {
	&__button {
		position: relative;
		width: 48px;
		height: 48px;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;

		&::after {
			content: '';
			position: absolute;
			top: 10px;
			right: 10px;
			width: 10px;
			height: 10px;
			background-color: var(--primary-orange-color);
			border-radius: 100%;
			border: 2px solid var(--neutral-07-color);
		}
	}
}

.header-notification {
	&__button {
		position: relative;
		width: 48px;
		height: 48px;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;

		&::after {
			content: '';
			position: absolute;
			top: 10px;
			right: 10px;
			width: 10px;
			height: 10px;
			background-color: var(--primary-orange-color);
			border-radius: 100%;
			border: 2px solid var(--neutral-07-color);
		}
	}
}

.header-user {
	&__button {
		position: relative;
		width: 48px;
		height: 48px;
		background: var(--secondary-orange-color);
		border: none;
		border-radius: 50%;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		padding: 0;
		cursor: pointer;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			vertical-align: middle;
		}
	}
}
</style>
