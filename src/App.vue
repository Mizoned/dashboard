<template>
	<the-preloader v-if="isLoading" />
	<div v-else :class="['app', { 'light-theme': !isDarkThemeMode }]">
		<router-view />
	</div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import ThePreloader from '@/components/ThePreloader.vue';

export default {
	components: { ThePreloader },
	computed: {
		...mapGetters({
			isDarkThemeMode: 'themeModule/isDarkThemeMode',
			isLoading: 'authModule/isLoading'
		})
	},
	mounted() {
		let accessToken = localStorage.getItem('token');

		if (accessToken) {
			this.setLoading(true);

			this.checkAuthorization()
				.catch(async () => {
					this.deleteToken();
					this.deleteUser();
					await this.$router.push('/sign-in');
				})
				//TODO позже убрать искусственную задержку
				.finally(() => setTimeout(() => this.setLoading(false), 1000));
		}
	},
	methods: {
		...mapActions({
			checkAuthorization: 'authModule/checkAuthorization'
		}),
		...mapMutations({
			deleteToken: 'authModule/deleteToken',
			deleteUser: 'userModule/deleteUser',
			setLoading: 'authModule/setLoading'
		})
	}
};
</script>

<style scoped lang="scss">
.app {
	display: flex;
	height: 100%;
	overflow: hidden;
	background-color: var(--neutral-dark-black-background-color);
	transition: background-color 0.3s;
}
</style>
