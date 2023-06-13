<template>
	<div v-if="visiblePages.length" class="v-pagination">
		<v-button
			label="Prev"
			:disabled="currentPage === 1"
			color="secondary"
			size="small"
			@click="goToPreviousPage"
		/>
		<v-button
			v-for="page in visiblePages"
			:key="page"
			color="secondary"
			size="small"
			:label="page"
			:class="{ 'v-button--active': page === currentPage }"
			@click="changePageHandler(page)"
		/>
		<v-button
			label="Next"
			:disabled="currentPage === totalPages"
			color="secondary"
			size="small"
			@click="goToNextPage"
		/>
	</div>
</template>

<script>
export default {
	name: 'VPagination',
	props: {
		totalPages: {
			type: Number,
			required: true
		},
		currentPage: {
			type: Number,
			required: true
		}
	},
	emits: ['update:current-page'],
	computed: {
		visiblePages() {
			const totalPages = this.totalPages;
			const currentPage = this.currentPage;
			const maxVisiblePages = 4;

			const firstVisiblePage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
			const lastVisiblePage = Math.min(firstVisiblePage + maxVisiblePages - 1, totalPages);

			const visiblePages = [];
			for (let page = firstVisiblePage; page <= lastVisiblePage; page++) {
				visiblePages.push(page);
			}

			return visiblePages;
		}
	},
	methods: {
		changePageHandler(page) {
			this.$emit('update:current-page', page);
		},
		goToPreviousPage() {
			if (this.currentPage > 1) {
				this.changePageHandler(this.currentPage - 1);
			}
		},
		goToNextPage() {
			if (this.currentPage < this.totalPages) {
				this.changePageHandler(this.currentPage + 1);
			}
		}
	}
};
</script>

<style scoped lang="scss">
.v-pagination {
	display: flex;
	align-items: center;
	gap: 8px;
}
</style>
