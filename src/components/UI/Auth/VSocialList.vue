<template>
	<div class="socials">
		<v-google class="socials__social"></v-google>
		<v-apple class="socials__social"></v-apple>
	</div>
</template>

<script>
import VGoogle from '@/components/UI/Auth/VGoogle.vue';
import VApple from '@/components/UI/Auth/VApple.vue';

export default {
	name: 'VSocialList',
	components: { VGoogle, VApple }
};
</script>

<style scoped lang="scss">
.socials {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 8px;
}
</style>
