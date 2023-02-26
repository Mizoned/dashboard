<template>
  <div :class="[ 'v-divider', `v-divider--h-${height}`]"></div>
</template>

<script>
  export default {
    name: "VDivider",
    props: {
      height: {
        type: Number,
        default: 1
      }
    }
  }
</script>

<style scoped lang="scss">
  .v-divider {
    width: 100%;
    height: 1px;
    background-color: var(--neutral-dark-gray-background-color);
    border-radius: 1px;
    transition: background-color 0.3s;

    &--h-2 {
      height: 2px;
      border-radius: 2px;
    }
  }
</style>