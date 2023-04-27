<template>
	<div class="v-plan-includes">
		<div class="v-plan-includes__image">
			<img src="@/assets/images/auth/Illustration.png" alt="" />
		</div>
		<div class="v-plan-includes__title">Plan includes</div>
		<div class="v-plan-includes__list">
			<div v-for="item in items" class="v-plan-includes__item">
				<div class="v-plan-includes__item-icon">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C14.3582 4 16.478 5.02032 17.9422 6.64358L11 13.5858L8.20711 10.7929C7.81658 10.4024 7.18342 10.4024 6.79289 10.7929C6.40237 11.1834 6.40237 11.8166 6.79289 12.2071L9.58579 15C10.3668 15.7811 11.6332 15.781 12.4142 15L19.1015 8.31276C19.6755 9.41616 20 10.6702 20 12Z"
							fill="#83BF6E"
						/>
					</svg>
				</div>
				<div class="v-plan-includes__item-text">{{ item }}</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'VPlanIncludes',
	data() {
		return {
			items: ['Unlimited product uploads', 'Pro tips', 'Free forever', 'Full author options']
		};
	}
};
</script>

<style scoped lang="scss">
.v-plan-includes {
	max-width: 212px;
	display: flex;
	flex-direction: column;
	gap: 48px;

	&__image {
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			height: 144px;
		}
	}

	&__title {
		font-style: normal;
		font-weight: 600;
		font-size: 32px;
		line-height: 40px;
		text-align: center;
		letter-spacing: -0.03em;
		color: var(--neutral-white-smoke-color);
		transition: color 0.3s;
	}

	&__item {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: unset;
		}

		&-icon {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 24px;
			height: 24px;

			& svg {
				width: 24px;
				height: 24px;
			}
		}

		&-text {
			font-style: normal;
			font-weight: 600;
			font-size: 14px;
			line-height: 24px;
			letter-spacing: -0.01em;
			color: var(--primary-dark-white-color);
			transition: color 0.3s;
		}
	}
}
</style>
