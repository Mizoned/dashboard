<template>
  <div class="v-label">
    <span class="v-label__text"><slot name="label"></slot></span>
    <div class="v-label__input"><slot name="input"></slot></div>
  </div>
</template>

<script>
export default {
  name: "VLabel"
}
</script>

<style scoped lang="scss">
  .v-label {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__text {
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -0.01em;
      color: var(--neutral-00-color);
    }
  }
</style>