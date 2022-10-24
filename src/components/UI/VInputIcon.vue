<template>
    <div
        ref="component"
        class="v-input-component"
        @focusin="focusIn"
        @mouseenter="hover"
        @mouseleave="hover"
        @focusout="focusOut"
    >
      <div class="v-input-component__img"><slot></slot></div>
      <input
          ref="input"
          :value="modelValue"
          class="v-input-component__input"
          @input="update"
          v-bind="$attrs"
      >
    </div>
</template>

<script>
export default {
  name: "VInputIcon",
  data() {
    return {
      isHover: false,
      inputValue: '',
    }
  },
  props: {
    modelValue: [String, Number]
  },
  methods: {
    update(event) {
      this.inputValue = event.target.value;
      this.$emit('update:modelValue', event.target.value);
    },
    focusIn() {
      this.$refs.component.classList.add('v-input-component--focus');
      this.$refs.input.focus();
    },
    focusOut() {
      this.$refs.component.classList.remove('v-input-component--focus');
    },
    hover() {
      this.$refs.component.classList.toggle('v-input-component--hover');
    },
  },
  watch: {
    inputValue(value) {
      if (value.length) {
        this.$refs.component.classList.add('v-input-component--filled');
      } else {
        this.$refs.component.classList.remove('v-input-component--filled');
      }
    }
  }
}
</script>

<style lang="scss">
  .v-input-component {
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

    &__img {
      width: 24px;
      height: 24px;
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
      .v-input-component__input::-moz-placeholder {
        color: var(--neutral-04-color);
      }
      .v-input-component__input::-webkit-input-placeholder {
        color: var(--neutral-04-color);
      }
      svg path {
        fill: var(--neutral-04-color);
      }
    }

    &--focus {
      outline: -webkit-focus-ring-color auto 1px;

      .v-input-component__input::-moz-placeholder {
        color: var(--neutral-00-color);
      }
      .v-input-component__input::-webkit-input-placeholder {
        color: var(--neutral-00-color);
      }
      svg path {
        fill: var(--neutral-00-color);
      }
    }

    &--filled {
      .v-input-component__input::-moz-placeholder {
        color: var(--neutral-00-color);
      }
      .v-input-component__input::-webkit-input-placeholder {
        color: var(--neutral-00-color);
      }
      svg path {
        fill: var(--neutral-00-color);
      }
    }
  }
</style>