<template>
    <div class="v-input">
      <div class="v-input__label" v-if="labelText">{{ labelText }}</div>
      <div class="v-input__wrapper"
           ref="component"
           @focusin="focusIn"
           @mouseenter="hover"
           @mouseleave="hover"
           @focusout="focusOut"
           :class="{ 'v-input--error': isError, 'v-input--filled': isFilled }"
      >
        <div class="v-input__svg">
          <slot v-if="!isError"></slot>
          <svg v-else @click="clear" class="v-input__svg--clear" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7072 17.7929C11.0977 18.1834 11.0977 18.8166 10.7072 19.2071C10.3167 19.5976 9.68351 19.5976 9.29299 19.2071L3.50009 13.4142C2.71905 12.6332 2.71904 11.3668 3.50009 10.5858L9.29299 4.79289C9.68351 4.40237 10.3167 4.40237 10.7072 4.79289C11.0977 5.18342 11.0977 5.81658 10.7072 6.20711L5.91431 11H20.0001C20.5524 11 21.0001 11.4477 21.0001 12C21.0001 12.5523 20.5524 13 20.0001 13H5.91431L10.7072 17.7929Z" fill="#FCFCFC"/></svg>
        </div>
        <input
            ref="input"
            :value="modelValue"
            class="v-input__input"
            @input="update"
            v-bind="$attrs"
        >
        <div v-if="isError" class="v-input__svg">
          <svg class="v-input__svg--error" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 15C12.5523 15 13 14.5523 13 14V9.00001C13 8.44772 12.5523 8.00001 12 8.00001C11.4477 8.00001 11 8.44772 11 9.00001V14C11 14.5523 11.4477 15 12 15Z" fill="#FF6A55"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.6739 17.5044L12.8689 5.56347C12.4852 4.8903 11.5149 4.89031 11.1312 5.56347L4.32627 17.5044C3.94636 18.1711 4.42779 18.9996 5.1951 18.9996H18.8051C19.5724 18.9996 20.0538 18.1711 19.6739 17.5044ZM14.6065 4.57321C13.4556 2.55372 10.5445 2.55372 9.3936 4.57321L2.58863 16.5142C1.44889 18.5141 2.89318 20.9996 5.1951 20.9996H18.8051C21.107 20.9996 22.5513 18.5141 21.4115 16.5142L14.6065 4.57321Z" fill="#FF6A55"/><path d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" fill="#FF6A55"/></svg>
        </div>
        <div v-if="!isError && modelValue.length > 0" class="v-input__svg">
          <svg class="v-input__svg--success" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2071 6.29289C21.5976 6.68342 21.5976 7.31658 21.2071 7.70711L12.6213 16.2929C11.4497 17.4645 9.55026 17.4645 8.37868 16.2929L4.79289 12.7071C4.40237 12.3166 4.40237 11.6834 4.79289 11.2929C5.18342 10.9024 5.81658 10.9024 6.20711 11.2929L9.79289 14.8787C10.1834 15.2692 10.8166 15.2692 11.2071 14.8787L19.7929 6.29289C20.1834 5.90237 20.8166 5.90237 21.2071 6.29289Z" fill="#83BF6E"/></svg>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "VInputIcon",
  data() {
    return {
      inputValue: ''
    }
  },
  props: {
    modelValue: [String],
    labelText: {
      type: String,
      default: ''
    },
    isError: {
      type: Boolean
    }
  },
  methods: {
    update(event) {
      this.inputValue = event.target.value;
      this.$emit('update:modelValue', event.target.value);
    },
    focusIn() {
      this.$refs.component.classList.add('v-input--focus');
      this.$refs.input.focus();
    },
    focusOut() {
      this.$refs.component.classList.remove('v-input--focus');
    },
    hover() {
      this.$refs.component.classList.toggle('v-input--hover');
    },
    clear() {
      this.$emit('clear');
    }
  },
  computed: {
    isFilled() {
      return this.modelValue.length > 0;
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-input {
    &__label {
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -0.01em;
      color: var(--neutral-00-color);
      margin-bottom: 20px;
    }

    &__wrapper {
      display: flex;
      align-items: center;
      column-gap: 12px;
      padding: 0 12px;
      background-color: var(--neutral-08-color);
      border-radius: 12px;
      border: 2px solid transparent;
      cursor: text;
      transition: all .3s ease;

      svg path {
        fill: var(--neutral-shade-dark-04-40-color);
      }
    }

    &__input {
      width: 100%;
      background-color: transparent;
      caret-color: var(--primary-blue-color);
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
      color: var(--neutral-00-color);
      padding: 10px 0;
      border: none;

      &::-moz-placeholder {
        color: var(--neutral-shade-dark-04-40-color);
      }
      &::-webkit-input-placeholder {
        color: var(--neutral-shade-dark-04-40-color);
      }
      &:focus-visible {
        outline: none;
      }
    }

    &--hover {
      .v-input__input::-moz-placeholder {
        color: var(--neutral-04-color);
      }
      .v-input__input::-webkit-input-placeholder {
        color: var(--neutral-04-color);
      }
      svg path {
        fill: var(--neutral-04-color);
      }
    }

    &--focus {
      border: var(--neutral-shade-04-50-color) solid 2px;

      .v-input__input::-moz-placeholder {
        color: var(--neutral-00-color);
      }
      .v-input__input::-webkit-input-placeholder {
        color: var(--neutral-00-color);
      }
      svg path {
        fill: var(--neutral-00-color);
      }
    }

    &--filled {
      .v-input__input::-moz-placeholder {
        color: var(--neutral-00-color);
      }
      svg path {
        fill: var(--neutral-00-color);
      }
    }

    &--error {
      border: 2px solid var(--primary-orange-color);

      .v-input__input {
        color: var(--primary-orange-color);
      }
      svg path {
        fill: var(--primary-orange-color);
      }
    }

    &__svg {
      width: 24px;
      height: 24px;

      &--error {
        path {
          fill: var(--primary-orange-color) !important;
        }
      }
      &--success {
        path {
          fill: var(--primary-green-color) !important;
        }
      }
      &--clear {
        cursor: pointer;
        path {
          fill: var(--neutral-01-color) !important;
        }
      }
    }
  }
</style>