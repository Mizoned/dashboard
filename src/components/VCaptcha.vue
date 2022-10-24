<template>
  <div class="v-captcha">This site is protected by reCAPTCHA and the Google Privacy Policy.</div>
</template>

<script>
export default {
  name: "VCaptcha"
}
</script>

<style scoped lang="scss">
  .v-captcha {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: var(--neutral-shade-dark-04-40-color);
  }
</style>