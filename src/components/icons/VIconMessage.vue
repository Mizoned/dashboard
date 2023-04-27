<template>
	<svg
		v-if="!isActive"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M7 9C7 8.44772 7.44772 8 8 8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H8C7.44772 10 7 9.55228 7 9Z"
			fill="#6F767E"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M7 13C7 12.4477 7.44772 12 8 12H12C12.5523 12 13 12.4477 13 13C13 13.5523 12.5523 14 12 14H8C7.44772 14 7 13.5523 7 13Z"
			fill="#6F767E"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M6.71963 17.4636C7.07906 17.164 7.53213 17 8 17H19C19.5523 17 20 16.5523 20 16V6C20 5.44771 19.5523 5 19 5H5C4.44772 5 4 5.44772 4 6V19.7299L6.71963 17.4636ZM8 19H19C20.6569 19 22 17.6569 22 16V6C22 4.34315 20.6569 3 19 3H5C3.34315 3 2 4.34315 2 6V19.7299C2 21.4256 3.97771 22.3519 5.28037 21.2664L8 19Z"
			fill="#6F767E"
		/>
	</svg>
	<svg
		v-else
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V16C22 17.6569 20.6569 19 19 19H8.36205C8.12811 19 7.90158 19.082 7.72187 19.2318L5.28037 21.2664C3.97771 22.3519 2 21.4256 2 19.7299V6ZM7 9C7 8.44772 7.44772 8 8 8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H8C7.44772 10 7 9.55228 7 9ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H12C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12H8Z"
			fill="#6F767E"
		/>
	</svg>
</template>

<script>
export default {
	name: 'VIconMessage',
	props: {
		isActive: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style scoped></style>
