<template>
  <button
      class=""
      :class="['v-button', `v-button--${color}`]"
  >
    <slot name="svg-before"></slot>
    <span>{{ label }}</span>
    <slot name="svg-after"></slot>
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

      &:deep(svg) {
        path {
          fill: var(--neutral-shade-04-75-color);
        }
      }
    }

    &--primary {
      background-color: var(--primary-blue-color);
      color: var(--neutral-01-color);

      &:hover {
        background-color: var(--primary-blue-dark-color);
      }
      &:disabled {
        background-color: var(--primary-blue-50-color);
      }
    }

    &--secondary {
      background-color: var(--neutral-07-color);
      border-color: var(--neutral-06-color);
      color: var(--neutral-00-color);

      &:hover {
        background-color: transparent;
        border-color: var(--neutral-00-color);
      }
      &:disabled {
        background-color: var(--neutral-shade-06-50-color);
        border: 2px solid var(--neutral-shade-05-50-color);
      }
    }
  }
</style>