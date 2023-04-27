<template>
	<svg
		class="button-preloader"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M12.5 2C13.0523 2 13.5 2.44772 13.5 3V5C13.5 5.55228 13.0523 6 12.5 6C11.9477 6 11.5 5.55228 11.5 5V3C11.5 2.44772 11.9477 2 12.5 2Z"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M12.5 18C13.0523 18 13.5 18.4477 13.5 19V21C13.5 21.5523 13.0523 22 12.5 22C11.9477 22 11.5 21.5523 11.5 21V19C11.5 18.4477 11.9477 18 12.5 18Z"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M5.42879 4.92961C5.81931 4.53909 6.45248 4.53909 6.843 4.92961L8.25721 6.34383C8.64774 6.73435 8.64774 7.36751 8.25721 7.75804C7.86669 8.14856 7.23352 8.14856 6.843 7.75804L5.42879 6.34383C5.03826 5.9533 5.03826 5.32014 5.42879 4.92961Z"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M16.7423 16.2421C17.1328 15.8516 17.766 15.8516 18.1565 16.2421L19.5707 17.6563C19.9612 18.0468 19.9612 18.68 19.5707 19.0705C19.1802 19.4611 18.547 19.4611 18.1565 19.0705L16.7423 17.6563C16.3517 17.2658 16.3517 16.6326 16.7423 16.2421Z"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2.5 12C2.5 11.4477 2.94772 11 3.5 11L5.5 11C6.05228 11 6.5 11.4477 6.5 12C6.5 12.5523 6.05228 13 5.5 13L3.5 13C2.94772 13 2.5 12.5523 2.5 12Z"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M18.5 12C18.5 11.4477 18.9477 11 19.5 11L21.5 11C22.0523 11 22.5 11.4477 22.5 12C22.5 12.5523 22.0523 13 21.5 13L19.5 13C18.9477 13 18.5 12.5523 18.5 12Z"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M5.42864 19.0702C5.03811 18.6797 5.03811 18.0465 5.42864 17.656L6.84285 16.2418C7.23337 15.8513 7.86654 15.8513 8.25706 16.2418C8.64759 16.6323 8.64759 17.2655 8.25706 17.656L6.84285 19.0702C6.45232 19.4608 5.81916 19.4608 5.42864 19.0702Z"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M16.7431 7.75774C16.3526 7.36721 16.3526 6.73405 16.7431 6.34352L18.1573 4.92931C18.5478 4.53879 19.181 4.53879 19.5715 4.92931C19.962 5.31983 19.962 5.953 19.5715 6.34352L18.1573 7.75774C17.7668 8.14826 17.1336 8.14826 16.7431 7.75774Z"
			fill="white"
		/>
	</svg>
</template>

<script>
export default {
	name: 'VIconPreloader'
};
</script>

<style scoped>
.button-preloader {
	animation: button-preloader 3s linear infinite;
}
@keyframes button-preloader {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
