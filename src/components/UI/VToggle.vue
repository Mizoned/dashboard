<template>
  <div class="v-toggle">
    <div class="v-toggle__box">
      <v-label :label="label" :tooltip-message="tooltipMessage"/>
      <slot></slot>
    </div>
    <v-divider class="v-toggle__divider" v-if="useDivider"/>
  </div>
</template>

<script>

import VLabel from "@/components/UI/VLabel.vue";

export default {
  name: "VToggle",
  components: {VLabel},
  props: {
    label: {
      type: String,
      required: true
    },
    tooltipMessage: {
      type: String,
      default: ''
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