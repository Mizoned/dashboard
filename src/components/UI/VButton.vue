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
    padding: 12px 20px;
    background-color: var(--primary-blue-color);
    color: var(--neutral-01-color);
    border-radius: 12px;
    cursor: pointer;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.01em;
    transition: border 0.3s, color 0.3s, background-color 0.3s;

    &:hover {
      background-color: var(--primary-blue-50-color);
    }

    &--disabled {
      pointer-events: none;
      color: rgba(252, 252, 252, 0.75);
      background-color: var(--primary-blue-50-color);
    }
  }
</style>