<template>
	<header-item
		v-click-outside="clickOutsideHandler"
		:is-open="isOpen"
		@update:is-open="clickHandler"
	>
		<template #svg>
			<v-avatar :src="imagePath" size="md" />
		</template>
		<template #body>
			<div class="profile">
				<div class="profile__list">
					<div class="profile__list-box">
						<v-link-with-icon label="Profile" href="/profile" icon-component-name="VIconPerson" />
					</div>
					<div class="profile__list-box">
						<v-link-with-icon
							label="Analytics"
							href="/analytics"
							icon-component-name="VIconBarChart"
						/>
						<v-link-with-icon
							label="Affiliate center"
							href="/affiliate-center"
							icon-component-name="VIconTicket"
						/>
						<v-link-with-icon
							label="Explore authors"
							href="/explore-authors"
							icon-component-name="VIconGrid"
						/>
					</div>
					<div class="profile__list-box">
						<v-link-with-icon
							label="Upgrade to Pro"
							href="/upgrade-to-pro"
							icon-component-name="VIconLeaderboard"
							color="purple"
						/>
					</div>
					<div class="profile__list-box">
						<v-link-with-icon
							label="Account settings"
							href="/account-settings"
							icon-component-name="VIconSettings"
							@click="clickHandler(false)"
						/>
						<profile-button
							label="Log out"
							icon-component-name="VIconLogout"
							@click="logoutHandler"
						/>
					</div>
				</div>
			</div>
		</template>
	</header-item>
</template>

<script>
import HeaderItem from '@/components/UI/Header/VHeaderItem.vue';
import ProfileButton from '@/components/UI/Header/VProfileItem.vue';
import { mapActions, mapState } from 'vuex';
import VAvatar from '@/components/UI/VAvatar.vue';

export default {
	name: 'VProfile',
	components: { VAvatar, ProfileButton, HeaderItem },
	props: {
		isOpen: {
			type: Boolean,
			default: false
		}
	},
	emits: ['update:isOpen'],
	computed: {
		...mapState({
			imagePath: (state) => state.auth.user.imagePath
		})
	},
	methods: {
		...mapActions({
			logout: 'auth/logout'
		}),
		clickHandler(value) {
			this.$emit('update:isOpen', { name: 'profile', value });
		},
		clickOutsideHandler() {
			if (!this.isOpen) return;
			this.$emit('update:isOpen', { name: 'profile', value: false });
		},
		logoutHandler() {
			this.logout()
				.then(() => {
					this.$router.push('/sign-in');
				})
				.catch((error) => {
					console.error(error.message);
				});
		}
	}
};
</script>

<style scoped lang="scss">
.profile {
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 12px;
	width: 280px;
	height: inherit;
	max-height: inherit;

	&-img {
		width: 48px;
		height: 48px;
		border-radius: 100%;
		overflow: hidden;

		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
			max-width: 100%;
			vertical-align: middle;
		}
	}

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__list {
		overflow-y: auto;
		min-height: 0;
		overflow-x: hidden;
		flex: 1 1 auto;

		&-box {
			border-bottom: 1px solid var(--neutral-dark-gray-background-color);
			margin-bottom: 12px;
			padding-bottom: 12px;
			transition: border-bottom-color 0.3s;

			&:last-child {
				border-bottom: none;
				margin-bottom: unset;
				padding-bottom: unset;
			}
		}

		@media only screen and (max-width: 768px) {
			margin: 0 -8px;
			padding: 0 4px 0 8px;
		}
	}

	&__button {
		margin-top: 12px;
		width: 100%;

		@media only screen and (max-width: 768px) {
			margin-top: auto;
		}
	}

	@media only screen and (max-width: 768px) {
		width: 100%;
		height: 100%;
	}
}
</style>
