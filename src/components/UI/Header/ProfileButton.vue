<template>
	<div :class="['profile-item', `profile-item--${color}`]">
		<component
			:is="iconComponentName"
			v-if="iconComponentName"
			:is-active="$route.name === label"
		/>
		<span class="profile-item__label">{{ label }}</span>
	</div>
</template>

<script>
export default {
	name: 'ProfileItem',
	props: {
		label: {
			type: String,
			required: true
		},
		color: {
			type: String,
			default: 'white'
		},
		iconComponentName: {
			type: String,
			default: ''
		}
	}
};
</script>

<style scoped lang="scss">
.profile-item {
	display: flex;
	align-items: center;
	padding: 12px;
	gap: 12px;
	cursor: pointer;
	border-radius: 12px;

	&__label {
		font-weight: 600;
		font-size: 15px;
		line-height: 24px;
		letter-spacing: -0.01em;
		cursor: pointer;
		transition: all 0.3s;
	}

	&--white {
		color: var(--primary-dark-white-color);

		&:hover {
			background-color: var(--neutral-dark-gray-background-color);
			color: var(--neutral-champagne-color);

			&:deep(svg) {
				path {
					fill: var(--neutral-champagne-background-color);
				}
			}
		}
	}

	&--purple {
		color: var(--primary-purple-color);
		opacity: 1;
		transition: all 0.3s;

		&:deep(svg) {
			path {
				fill: var(--primary-purple-color);
			}
		}

		&:hover {
			opacity: 0.8;
		}
	}
}
</style>
