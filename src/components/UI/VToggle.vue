<template>
  <div class="v-toggle">
    <div class="v-toggle__box">
      <div class="v-toggle__label">
        {{ label }}
        <div class="v-toggle__tooltip" title="Maximum 100 characters. No HTML or emoji allowed">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6673 7.99992C14.6673 11.6818 11.6825 14.6666 8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992ZM8.00065 7.33325C8.36884 7.33325 8.66732 7.63173 8.66732 7.99992V11.3338C8.66732 11.702 8.36884 12.0005 8.00065 12.0005C7.63246 12.0005 7.33398 11.702 7.33398 11.3338V7.99992C7.33398 7.63173 7.63246 7.33325 8.00065 7.33325ZM8.00065 5.99992C8.36884 5.99992 8.66732 5.70144 8.66732 5.33325C8.66732 4.96506 8.36884 4.66659 8.00065 4.66659C7.63246 4.66659 7.33398 4.96506 7.33398 5.33325C7.33398 5.70144 7.63246 5.99992 8.00065 5.99992Z" fill="#9A9FA5"/>
          </svg>
        </div>
      </div>
      <slot></slot>
    </div>
    <v-divider class="v-toggle__divider" v-if="useDivider"/>
  </div>
</template>

<script>

export default {
  name: "VToggle",
  props: {
    label: {
      type: String,
      required: true
    },
    useDivider: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  .v-toggle {
    &__box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
    }

    &__label {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: var(--neutral-white-smoke-background-color);
      transition: color 0.3s;
    }

    &__tooltip {
      display: inline-block;
      vertical-align: text-top;
      margin-left: 4px;
    }

    &__divider {
      margin-top: 16px;
    }
  }
</style>