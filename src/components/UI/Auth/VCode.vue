<template>
  <div class="code" :class="{ 'code--error': isError }">
    <div class="code__inputs">
      <input class="code__input"
             @input="handleChange($event, 0)"
             @keydown="handleKeyDown($event, 0)"
             v-model="inputVars[0]"
             ref="input_0"
             v-focus
             @blur="blur"
      >
      <input class="code__input"
             @input="handleChange($event, 1)"
             @keydown="handleKeyDown($event, 1)"
             v-model="inputVars[1]"
             ref="input_1"
             @blur="blur"
      >
      <input class="code__input"
             @input="handleChange($event, 2)"
             @keydown="handleKeyDown($event, 2)"
             v-model="inputVars[2]"
             ref="input_2"
             @blur="blur"
      >
      <input class="code__input"
             @input="handleChange($event, 3)"
             @keydown="handleKeyDown($event, 3)"
             v-model="inputVars[3]"
             ref="input_3"
             @blur="blur"
      >
    </div>
    <div v-if="errorMessage" class="code__error">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  name: "VCode",
  data() {
    return {
      maxLength: 1,
      inputVars: ['', '', '', '']
    }
  },
  props: {
    modelValue: [String],
    isError: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleKeyDown(event, index) {
      if (event.code === 'Backspace') {
        event.preventDefault();
        if (this.inputVars[index].match(/^[0-9]$/)) {
          const input = this.$refs[`input_${index}`];
          input.value = '';
          this.inputVars[index] = '';
        } else {
          let prevent = this.$refs[`input_${index - 1}`];
          if (prevent) {
            prevent.focus()
          }
        }
        this.updateCode();
      }
    },
    handleChange(event, index) {
      this.inputVars[index] = event.data ?? '';
      if (!this.inputVars[index].match(/^[0-9]$/)) {
        this.inputVars[index] = '';
        return;
      }

      if (index < this.inputVars.length - 1) {
        this.$refs[`input_${index + 1}`].focus();
      } else {
        this.$refs[`input_${index}`].blur();
      }

      this.updateCode();
    },
    updateCode() {
      this.$emit('update:modelValue', this.result);
    },
    blur() {
      this.$emit('blur');
    }
  },
  computed: {
    result() {
      return this.inputVars.join('');
    }
  }
}
</script>

<style lang="scss" scoped>
  .code {
    &__inputs {
      display: flex;
      gap: 12px;
    }

    &__input {
      padding: 12px;
      border-radius: 12px;
      background-color: var(--neutral-dark-gray-background-color);
      outline: none;
      width: 25%;
      border: 2px solid transparent;
      caret-color: var(--neutral-champagne-color);
      height: 72px;
      font-weight: 600;
      font-size: 48px;
      line-height: 48px;
      text-align: center;
      letter-spacing: -0.03em;
      color: var(--neutral-champagne-color);
      transition: background-color 0.3s, caret-color 0.3s, color 0.3s;

      &::-moz-placeholder {
        color: var(--primary-dark-white-color);
      }
      &::-webkit-input-placeholder {
        color: var(--primary-dark-white-color);
      }
      &:focus-visible {
        outline: none;
        border: 2px solid var(--primary-ivory-color) ;
        background-color: var(--neutral-light-black-background-color);
      }
    }

    &__error {
      font-weight: 500;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: -0.01em;
      color: var(--primary-orange-color);
      padding: 6px 6px 0 6px;
    }

    &--error {
      .code__input {
        background: var(--primary-orange-15-color);
        color: var(--primary-orange-color);
        border: transparent;
        caret-color: var(--primary-orange-color);
      }
    }
  }
</style>