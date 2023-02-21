<template>
  <div class="v-box">
    <div class="v-box__head"><slot name="head"></slot></div>
    <div class="v-box__body"><slot name="body"></slot></div>
  </div>
</template>

<script>
export default {
  name: "VBox"
}
</script>

<style scoped lang="scss">
  .v-box {
    display: flex;
    flex-direction: column;
    gap: 32px;
    &__head {

    }
    &__body {

    }
  }
</style>