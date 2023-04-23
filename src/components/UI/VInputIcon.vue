<template>
  <div :class="['v-input', { 'v-input--error': isError}]">
    <div class="v-input__inner">
      <button class="v-input__left-svg">
        <component v-if="!isFilled || !isError" :is="svgNameComponent"/>
        <v-icon-arrow v-else @click="clear" direction="left" color="champagne"/>
      </button>
      <input
          ref="input"
          :value="modelValue"
          class="v-input__input"
          @input="update"
          v-bind="$attrs"
          autocomplete="off"
      />
      <div class="v-input__right-svg">
        <v-icon-warning v-if="isError" class="v-input__svg--error"/>
        <v-icon-check v-if="!isError && modelValue.length > 0"/>
      </div>
    </div>
    <div v-if="isError && errorMessage" class="v-input__error">{{ errorMessage }}</div>
  </div>
</template>

<script>

export default {
  name: "VInputIcon",
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    isError: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ''
    },
    svgNameComponent: {
      type: String,
      default: ''
    }
  },
  computed: {
    isFilled() {
      return !!this.modelValue;
    }
  },
  methods: {
    update(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    focus() {
      this.$refs.input.focus();
    },
    clear() {
      this.$emit('clear');
    }
  }
}
</script>

<style scoped lang="scss">
  .v-input {
    &__inner {
      position: relative;
    }

    &__input {
      padding: 10px 42px;
      background-color: var(--neutral-dark-gray-background-color);
      border: 2px solid transparent;
      border-radius: 12px;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: -0.01em;
      width: 100%;
      color: var(--neutral-champagne-color);
      transition: color 0.3s, background-color 0.3s, border-color 0.3s;
      outline: none;
      color-scheme: var(--color-scheme);

      &:focus {
        border-color: var(--primary-blue-color);
        background-color: var(--neutral-dark-black-background-color);
      }

      &:focus-visible {
        border-color: var(--primary-blue-color);
        background-color: var(--neutral-dark-black-background-color);
      }

      &::placeholder {
        color: var(--neutral-shade-dark-04-40-color);
      }

      &:hover {
        &::placeholder {
          color: var(--primary-dark-white-color);
        }
      }
    }

    &__left-svg {
      cursor: pointer;
    }

    &__left-svg, &__right-svg {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      padding: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.3s;
      background: none;
    }

    &__left-svg {
      left: 12px;
    }

    &__right-svg {
      right: 12px;
    }

    &__error {
      color: var(--primary-orange-color);
      font-weight: 500;
      font-size: 12px;
      line-height: 12px;
      padding: 6px 6px 0 6px;
    }

    &--error {
      .v-input__icon svg path {
        fill: var(--primary-orange-color);
      }

      .v-input__input {
        background-color: var(--primary-orange-15-color);
        border: 2px solid var(--primary-orange-color);
        color: var(--primary-orange-color);
      }
    }
  }
</style>