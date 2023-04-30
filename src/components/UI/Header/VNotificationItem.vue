<template>
	<div :class="['notification-item', { 'notification-item--new': isNew }]">
		<div class="notification-item__avatar">
			<img src="@/assets/images/profile2.jpg" alt="avatar" />
			<div
				v-if="type === types.comment"
				:class="['notification-item__type', `notification-item__type--${type}`]"
			>
				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M1 3C1 2.17157 1.67157 1.5 2.5 1.5H9.5C10.3284 1.5 11 2.17157 11 3V8C11 8.82843 10.3284 9.5 9.5 9.5H4.18103C4.06406 9.5 3.95079 9.54101 3.86093 9.61589L2.64018 10.6332C1.98886 11.176 1 10.7128 1 9.86496V3ZM3.5 4.5C3.5 4.22386 3.72386 4 4 4H8C8.27614 4 8.5 4.22386 8.5 4.5C8.5 4.77614 8.27614 5 8 5H4C3.72386 5 3.5 4.77614 3.5 4.5ZM4 6C3.72386 6 3.5 6.22386 3.5 6.5C3.5 6.77614 3.72386 7 4 7H6C6.27614 7 6.5 6.77614 6.5 6.5C6.5 6.22386 6.27614 6 6 6H4Z"
						fill="white"
					/>
				</svg>
			</div>
			<div
				v-if="type === types.like"
				:class="['notification-item__type', `notification-item__type--${type}`]"
			>
				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5.90014 2.60683C4.77919 1.46439 2.95777 1.46439 1.83682 2.60683C0.721061 3.74397 0.721061 5.58379 1.83682 6.72093L5.28621 10.2364C5.67822 10.636 6.32178 10.636 6.71379 10.2364L10.1632 6.72093C11.2789 5.58379 11.2789 3.74397 10.1632 2.60683C9.04223 1.46439 7.22081 1.46439 6.09986 2.60683V2.60683C6.04502 2.66272 5.95498 2.66272 5.90014 2.60683V2.60683Z"
						fill="white"
					/>
				</svg>
			</div>
			<div
				v-if="type === types.purchase"
				:class="['notification-item__type', `notification-item__type--${type}`]"
			>
				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6.00024 1C4.89567 1 4.00024 1.89543 4.00024 3H3.32444C2.56795 3 1.92985 3.5633 1.83602 4.31395L1.21102 9.31395C1.09911 10.2092 1.79719 11 2.69944 11H9.30109C10.2033 11 10.9014 10.2092 10.7895 9.31395L10.1645 4.31395C10.0707 3.5633 9.43258 3 8.67609 3H8.00024C8.00024 1.89543 7.10481 1 6.00024 1ZM7.00024 3C7.00024 2.44772 6.55253 2 6.00024 2C5.44796 2 5.00024 2.44772 5.00024 3H7.00024Z"
						fill="white"
					/>
				</svg>
			</div>
			<div
				v-if="type === types.rate"
				:class="['notification-item__type', `notification-item__type--${type}`]"
			>
				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5.06796 1.92167C5.37926 1.02611 6.64579 1.02611 6.95709 1.92167L7.42985 3.28175C7.56718 3.67682 7.93587 3.94469 8.35404 3.95321L9.79364 3.98255C10.7416 4.00187 11.1329 5.20641 10.3774 5.77921L9.22999 6.64913C8.8967 6.90182 8.75587 7.33524 8.87699 7.73558L9.29395 9.11379C9.5685 10.0213 8.54385 10.7657 7.76561 10.2242L6.5837 9.40174C6.24039 9.16284 5.78466 9.16284 5.44134 9.40174L4.25944 10.2242C3.48119 10.7657 2.45655 10.0213 2.7311 9.11379L3.14806 7.73558C3.26918 7.33524 3.12835 6.90182 2.79505 6.64913L1.64763 5.77922C0.892099 5.20641 1.28348 4.00187 2.2314 3.98255L3.67101 3.95321C4.08918 3.94469 4.45787 3.67682 4.5952 3.28175L5.06796 1.92167Z"
						fill="white"
					/>
				</svg>
			</div>
			<!--TODO Сделать динамическую подгрузку аватара в свойство avatar-->
		</div>
		<div class="notification-item__details">
			<div class="notification-item__line">
				<div class="notification-item__name">{{ name }}</div>
				<div class="notification-item__data">
					<div class="notification-item__time">{{ time }}</div>
					<div class="notification-item__status"></div>
				</div>
			</div>
			<div v-if="type === types.comment" class="notification-item__message">
				Comment on <strong>{{ message }}</strong>
			</div>
			<div v-if="type === types.like" class="notification-item__message">
				Likes <strong>{{ message }}</strong>
			</div>
			<div v-if="type === types.purchase" class="notification-item__message">
				Purchased <strong>{{ message }}</strong>
			</div>
			<div v-if="type === types.rate" class="notification-item__message">
				Rate<span class="notification-item__message-svg"
					><svg
						width="20"
						height="21"
						viewBox="0 0 20 21"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.44627 3.21271C8.9651 1.72011 11.076 1.72011 11.5948 3.21271L12.3828 5.47951C12.6116 6.13796 13.2261 6.58441 13.9231 6.59861L16.3224 6.64751C17.9023 6.6797 18.5546 8.68728 17.2954 9.64195L15.383 11.0918C14.8275 11.513 14.5928 12.2353 14.7947 12.9026L15.4896 15.1996C15.9472 16.7121 14.2394 17.9528 12.9424 17.0502L10.9725 15.6795C10.4003 15.2813 9.64077 15.2813 9.06858 15.6795L7.09873 17.0502C5.80166 17.9528 4.09392 16.7121 4.55151 15.1996L5.24644 12.9026C5.4483 12.2353 5.21359 11.513 4.65809 11.0918L2.74573 9.64195C1.48651 8.68728 2.13881 6.6797 3.71868 6.64751L6.11802 6.59861C6.81497 6.58441 7.42946 6.13796 7.65833 5.47951L8.44627 3.21271Z"
							fill="#FFD88D"
						/></svg
				></span>
				<strong>{{ rate }}</strong> for <strong>{{ message }}</strong>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'VNotificationItem',
	props: {
		isNew: {
			type: Boolean,
			default: false
		},
		name: {
			type: String,
			required: true
		},
		time: {
			type: String,
			required: true
		},
		message: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		rate: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			types: {
				comment: 'comment',
				like: 'like',
				purchase: 'purchase',
				rate: 'rate'
			}
		};
	}
};
</script>

<style scoped lang="scss">
.notification-item {
	display: grid;
	grid-template-columns: 56px 1fr;
	align-items: center;
	gap: 12px;
	padding: 12px;
	background-color: transparent;
	border-radius: 12px;
	transition: background-color 0.3s;
	cursor: pointer;

	&:hover {
		background-color: var(--neutral-dark-gray-background-color);
	}

	&__avatar {
		position: relative;
		width: 56px;
		height: 56px;
		flex-shrink: 0;

		&--online {
			&::after {
				content: '';
				position: absolute;
				top: -2px;
				left: -2px;
				width: 12px;
				height: 12px;
				background-color: var(--primary-green-color);
				border: 4px solid var(--neutral-dark-gray-background-color);
				border-radius: 100%;
			}
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 100%;
		}
	}

	&__type {
		position: absolute;
		right: -2px;
		bottom: -2px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2px;
		width: 20px;
		height: 20px;
		border: 2px solid var(--neutral-dark-black-background-color);
		border-radius: 100%;
		background-color: transparent;
		transition: background-color 0.3s, border-color 0.3s;

		&--comment {
			background-color: var(--primary-blue-color);
		}

		&--like {
			background-color: var(--primary-orange-color);
		}

		&--purchase {
			background-color: var(--primary-green-color);
		}

		&--rate {
			background-color: var(--primary-purple-color);
		}
	}

	&__details {
		display: grid;
		grid-template-rows: 1fr 1fr;
		gap: 4px;
		width: 100%;
	}

	&__line {
		display: flex;
		gap: 24px;
		justify-content: space-between;
		align-items: center;
	}

	&__name {
		font-weight: 700;
		font-size: 15px;
		letter-spacing: -0.01em;
		color: var(--neutral-champagne-color);
		transition: color 0.3s;
	}

	&__data {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	&__time {
		font-weight: 600;
		font-size: 13px;
		line-height: 16px;
		letter-spacing: -0.01em;
		color: var(--primary-ivory-color);
		transition: color 0.3s;
	}

	&__status {
		width: 12px;
		height: 12px;
		border-radius: 100%;
		background-color: var(--primary-ivory-color);
		transition: background-color 0.3s;
	}

	&__message {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: 500;
		font-size: 15px;
		line-height: 24px;
		letter-spacing: -0.015em;
		color: var(--primary-dark-white-color);
		padding-right: 24px;
		transition: color 0.3s;

		svg {
			vertical-align: middle;
		}

		&-svg {
			padding: 0 4px 0 4px;
		}

		strong {
			font-weight: 700;
			letter-spacing: -0.01em;
			color: var(--neutral-champagne-color);
			transition: color 0.3s;
		}
	}

	&--new {
		.notification-item__status {
			background-color: var(--primary-blue-color);
			transition: color 0.3s;
		}
	}
}
</style>
