<template>
	<div :class="['v-avatar', `v-avatar--${size}`]">
		<img :src="path" alt="avatar" @error="loadingErrorHandler" />
	</div>
</template>

<script>
export default {
	name: 'VAvatar',
	props: {
		src: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: 'lg'
		}
	},
	data() {
		return {
			path: ''
		};
	},
	watch: {
		src(newVal) {
			this.path = newVal;
		}
	},
	created() {
		this.path = this.src;
	},
	methods: {
		loadingErrorHandler() {
			this.path = new URL('@/assets/images/no-photo.png', import.meta.url).href;
		}
	}
};
</script>

<style scoped lang="scss">
.v-avatar {
	&--lg {
		width: 96px;
		height: 96px;
	}

	&--md {
		width: 48px;
		height: 48px;
	}

	&--sm {
		width: 32px;
		height: 32px;
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}
}
</style>
