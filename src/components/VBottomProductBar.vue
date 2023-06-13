<template>
	<div class="bottom-product-bar">
		<div class="bottom-product-bar__left-hand">
			<slot name="leftHand"></slot>
		</div>
		<div class="bottom-product-bar__right-hand">
			<slot name="rightHand"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'VBottomProductBar'
};
</script>

<style scoped lang="scss">
.bottom-product-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 24px;
	flex-wrap: wrap;
	position: relative;
	margin: auto -40px -40px -40px;
	padding: 60px 40px 20px;
	z-index: 1;

	&:before {
		content: '';
		position: absolute;
		top: 40px;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		background-color: var(--neutral-light-black-background-color);
		box-shadow: inset 1px 0px 0px var(--neutral-dark-black-background-color);
		transition: background-color 0.3s, box-shadow 0.3s;

		@media screen and (max-width: 768px) {
			top: 24px;
		}
	}

	@media screen and (max-width: 768px) {
		margin: auto -16px -24px;
		padding: 40px 16px 16px;

		&__right-hand {
			width: 100%;
		}
	}
}
</style>
