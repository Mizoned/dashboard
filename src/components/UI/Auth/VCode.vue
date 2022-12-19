<template>
  <div class="code" :class="{ 'code--error': isError }">
    <div class="code__inputs">
      <input class="code__input"
             @input="handleChange($event, 0)"
             @keydown="handleKeyDown($event, 0)"
             v-model="inputVars[0]"
             ref="input_0"
             v-focus
      >
      <input class="code__input"
             @input="handleChange($event, 1)"
             @keydown="handleKeyDown($event, 1)"
             v-model="inputVars[1]"
             ref="input_1"
      >
      <input class="code__input"
             @input="handleChange($event, 2)"
             @keydown="handleKeyDown($event, 2)"
             v-model="inputVars[2]"
             ref="input_2"
      >
      <input class="code__input"
             @input="handleChange($event, 3)"
             @keydown="handleKeyDown($event, 3)"
             v-model="inputVars[3]"
             ref="input_3"
      >
    </div>
    <div v-if="isError" class="code__error">The code you entered is incorrect.</div>
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
    code: {
      type: String,
      required: true
    },
    isError: {
      type: Boolean,
      default: false
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
        this.updateStatusError();
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
      this.updateStatusError();
    },
    updateCode() {
      this.$emit('update:code', this.result);
    },
    updateStatusError() {
      if (this.isError) {
        this.$emit('update:isError', !this.isError);
      }
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
      background: var(--neutral-06-color);
      outline: none;
      width: 25%;
      border: 2px solid transparent;
      caret-color: var(--primary-blue-color);
      height: 72px;
      font-weight: 600;
      font-size: 48px;
      line-height: 48px;
      text-align: center;
      letter-spacing: -0.03em;
      color: var(--neutral-01-color);
      transition: all .3s ease;

      &::-moz-placeholder {
        color: var(--neutral-shade-dark-04-40-color);
      }
      &::-webkit-input-placeholder {
        color: var(--neutral-shade-dark-04-40-color);
      }
      &:focus-visible {
        outline: none;
        border: var(--neutral-shade-04-50-color) solid 2px;
        background: var(--neutral-07-color);
      }
    }

    &__error {
      font-weight: 500;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: -0.01em;
      color: var(--primary-orange-color);
      margin-top: 12px;
    }

    &--error {
      .code__input {
        background: var(--primary-orange-15-color);
        color: var(--primary-orange-color);
      }
    }
  }
</style>