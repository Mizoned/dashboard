<template>
  <div :class="[ 'profile-item', `profile-item--${ color }` ]">
    <slot name="svg"></slot>
    <span class="profile-item__label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: "ProfileItem",
  props: {
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style scoped lang="scss">
  .profile-item {
    display: flex;
    align-items: center;
    padding: 12px;
    gap: 12px;
    cursor: pointer;

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
        &:deep(svg) {
          path {
            fill: var(--neutral-champagne-background-color);
          }
        }

        .profile-item__label {
          color: var(--neutral-champagne-color);
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