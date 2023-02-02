<template>
  <div class="action-button-option">
    <div class="action-button-option__svg"><slot name="svg"></slot></div>
    <div class="action-button-option__label"><slot name="label"></slot></div>
  </div>
</template>

<script>
export default {
  name: "ActionButtonOption"
}
</script>

<style scoped lang="scss">
  .action-button-option {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    cursor: pointer;

    &__svg {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__label {
      color: var(--neutral-04-color);
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
      letter-spacing: -0.01em;
      transition: all 0.3s;
    }

    &:deep(svg) {
      path {
        fill: var(--neutral-04-color);
      }
    }

    &:hover {
      .action-button-option__label {
        color: var(--neutral-00-color);
      }

      &:deep(svg) {
        path {
          fill: var(--neutral-00-color);
        }
      }
    }
  }
</style>