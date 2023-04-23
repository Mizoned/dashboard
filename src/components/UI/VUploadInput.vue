<template>
  <div class="v-upload-input">
    <v-button :label="labelButton" before-svg-component-name="VIconUpload" color="secondary"/>
  </div>
</template>

<script>

export default {
  name: "VUploadInput",
  props: {
    labelButton: {
      type: String,
      default: 'String'
    }
  }
}
</script>

<style scoped lang="scss">
  .v-upload-input {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 76px 38px;
    width: 100%;
    background-color: var(--neutral-dark-gray-background-color);
    transition: background-color 0.3s;
    border-radius: 12px;
  }
</style>