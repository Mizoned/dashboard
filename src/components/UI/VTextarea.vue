<template>
    <textarea class="v-textarea" rows="4"/>
</template>

<script>
export default {
  name: "VTextarea",
}
</script>

<style scoped lang="scss">
  .v-textarea {
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
    resize: none;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 4px;
      border-radius: 12px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 12px;
      margin: 10px 0;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary-blue-color);
      border-radius: 12px;
    }

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
</style>