<template>
	<div class="main">
		<v-sidebar class="main__sidebar" />
		<div class="main__content">
			<v-header class="main__header"></v-header>
			<div class="main__view">
				<div class="main__container">
					<h1 class="main__title h3">{{ $route.name }}</h1>
					<router-view></router-view>
				</div>
			</div>
		</div>
		<v-overlay />
	</div>
</template>

<script>
import VHeader from '@/components/VHeader.vue';
import VSidebar from '@/components/VSidebar.vue';
import VOverlay from '@/components/VOverlay.vue';

export default {
	name: 'DashboardLayout',
	components: {
		VOverlay,
		VHeader,
		VSidebar
	}
};
</script>

<style scoped lang="scss">
.main {
	flex: 1 1 auto;
	display: grid;
	grid-template-columns: 340px 1fr;
	overflow: hidden;

	&__content {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		overflow: hidden;
	}

	&__view {
		display: flex;
		flex-direction: column;
		width: 100%;
		overflow-y: auto;
		padding: 40px;
		scroll-behavior: smooth;

		@media only screen and (max-width: 768px) {
			padding: 24px 16px;
		}
	}

	&__title {
		margin-bottom: 16px;
	}

	&__container {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}

	@media only screen and (max-width: 1250px) {
		grid-template-columns: 96px 1fr;
	}

	@media only screen and (max-width: 768px) {
		display: flex;
	}
}
</style>
