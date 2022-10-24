<template>
  <div class="socials">
    <v-google class="socials__social"></v-google>
    <v-apple class="socials__social"></v-apple>
  </div>
</template>

<script>
import VGoogle from "@/components/UI/Auth/VGoogle";
import VApple from "@/components/UI/Auth/VApple";

export default {
  name: "VSocialList",
  components: { VGoogle, VApple },
}
</script>

<style scoped lang="scss">
  .socials {
    display: flex;
    align-self: flex-start;
    column-gap: 8px;
  }
</style>