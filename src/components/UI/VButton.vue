<template>
  <button
      :class="['v-button', `v-button--${color}`]"
  >
    <component v-if="beforeSvgComponentName" :is="beforeSvgComponentName"/>
    <span>{{ label }}</span>
    <component v-if="afterSvgComponentName" :is="afterSvgComponentName"/>
  </button>
</template>

<script>
export default {
  name: "VButton",
  data() {
    return {
      topicTypes: {
        primary: 'primary',
        secondary: 'secondary'
      }
    }
  },
  props: {
    label: {
      type: String,
      default: 'Button'
    },
    color: {
      type: String,
      default: 'primary'
    },
    beforeSvgComponentName: {
      type: String,
      required: false
    },
    afterSvgComponentName: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
  .v-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    gap: 8px;
    border: 2px solid transparent;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.01em;
    transition: border 0.3s, color 0.3s, background-color 0.3s;

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    &--primary {
      background-color: var(--primary-blue-color);
      color: var(--primary-champagne-color);

      &:deep(svg) {
        path {
          fill: var(--primary-champagne-color);
        }
      }

      &:hover {
        background-color: var(--primary-dark-blue-color);
      }
    }

    &--secondary {
      background-color: var(--neutral-light-black-background-color);
      border-color: var(--neutral-dark-gray-background-color);
      color: var(--neutral-champagne-color);

      &:deep(svg) {
        & > path {
          fill: var(--neutral-champagne-background-color);
        }
      }

      &:hover {
        background-color: transparent;
        border-color: var(--neutral-champagne-background-color);
      }
    }
  }
</style>