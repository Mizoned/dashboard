<template>
	<div :class="['app-container', { 'light-theme': !isDarkThemeMode }]">
		<the-preloader v-if="isLoading" />
		<router-view v-else/>
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
