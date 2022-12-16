<template>
  <button class="v-button"><slot></slot></button>
</template>

<script>
export default {
  name: "VButton"
}
</script>

<style scoped lang="scss">
  .v-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border: 2px solid transparent;
    background-color: var(--primary-blue-color);
    color: var(--neutral-01-color);
    border-radius: 12px;
    cursor: pointer;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.01em;
    transition: border 0.3s, color 0.3s, background-color 0.3s;

    &:hover {
      background-color: var(--pribary-blue-dark-color);
    }
    &:disabled {
      pointer-events: none;
      color: rgba(252, 252, 252, 0.75);
      background-color: var(--primary-blue-50-color);
    }
    &:focus-visible {
      outline: none;
      border: var(--neutral-shade-04-50-color) solid 2px;
    }
  }
</style>