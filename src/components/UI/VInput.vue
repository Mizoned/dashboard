<template>
  <div :class="['v-input', { 'v-input--error': isError }]">
    <div v-if="isError || labelText" class="v-input__label">
      <div v-if="labelText" class="v-input__box">
        <span class="v-input__text">{{ labelText }}</span>
        <div class="v-input__icon" data-description="Maximum 100 characters. No HTML or emoji allowed" title="Maximum 100 characters. No HTML or emoji allowed">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6673 7.99992C14.6673 11.6818 11.6825 14.6666 8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992ZM8.00065 7.33325C8.36884 7.33325 8.66732 7.63173 8.66732 7.99992V11.3338C8.66732 11.702 8.36884 12.0005 8.00065 12.0005C7.63246 12.0005 7.33398 11.702 7.33398 11.3338V7.99992C7.33398 7.63173 7.63246 7.33325 8.00065 7.33325ZM8.00065 5.99992C8.36884 5.99992 8.66732 5.70144 8.66732 5.33325C8.66732 4.96506 8.36884 4.66659 8.00065 4.66659C7.63246 4.66659 7.33398 4.96506 7.33398 5.33325C7.33398 5.70144 7.63246 5.99992 8.00065 5.99992Z" fill="#9A9FA5"/>
          </svg>
        </div>
        <div class="v-input__tooltipster">{{ tooltipMessage }}</div>
      </div>
    </div>
    <div class="v-input__inner">
      <input class="v-input__input" v-bind="$attrs" :value="modelValue" @input="update">
    </div>
    <div v-if="isError" class="v-input__error">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  name: "VInput",
  props: {
    modelValue: [ String ],
    labelText: {
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
    tooltipMessage: {
      type: String,
      default: ''
    }
  },
  methods: {
    update(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  }
}
</script>

<style scoped lang="scss">
  .v-input {
    &__label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }

    &__box {
      position: relative;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    &__text {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: var(--neutral-white-smoke-background-color);
      transition: color 0.3s;
    }

    &__icon {
      display: flex;
      cursor: pointer;
    }

    //&__icon:hover ~ &__tooltipster {
    //  visibility: visible;
    //  opacity: 1;
    //}

    &__tooltipster {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      bottom: 100%;
      left: 0;
      padding: 1px 7px;
      border: 1px solid var();
      background-color: var(--neutral-dark-gray-background-color);
      border-radius: 4px;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: var(--neutral-snow-white-background-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all 0.3s;
    }

    &__error {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 12px;
      padding: 12px 12px 0 12px;
      letter-spacing: -0.01em;
      color: var(--primary-orange-color);
    }
    &__inner {

    }
    &__input {
      padding: 10px 10px;
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