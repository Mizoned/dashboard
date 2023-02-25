<template>
  <label class="v-switch">
    <input class="v-switch__input" type="checkbox">
    <span class="v-switch__box"></span>
  </label>
</template>

<script>
export default {
  name: "VSwitch"
}
</script>

<style scoped lang="scss">
.v-switch {
  display: inline-block;
  position: relative;
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &__input {
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  &__box {
    position: relative;
    display: block;
    background-color: var(--neutral-dark-black-background-color);
    width: 48px;
    height: 24px;
    border-radius: 32px;
    transition: background-color 0.3s;

    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      left: 2px;
      background-color: var(--neutral-light-black-background-color);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -1px 1px rgba(0, 0, 0, 0.1);
      border-radius: 24px;
      transform: translateY(-50%);
      transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
    }
  }

  /* Checked */
  &__input:checked + &__box {
    background-color: var(--primary-blue-color);

    &:before {
      transform: translate(24px, -50%);
      background-color: var(--neutral-dark-gray-background-color);
    }
  }

  /* Focused */
  &__input:focus + &__box {

  }

  /* Disabled */
  &__input:disabled + &__box {

  }

  &__input:checked:disabled + &__box {

  }
}

.light-theme {
  .v-switch {
    &__box {
      &:before {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgb(255, 255, 255, 0.9), inset 0 -1px 1px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>