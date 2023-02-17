<template>
  <router-link :to="{ name: 'Dashboard' }">
    <img v-if="isDarkThemeMode" draggable="false" class="v-logotype" src="@/assets/images/light-logo.png" alt="">
    <img v-else draggable="false" class="v-logotype" src="@/assets/images/dark-logo.png" alt="">
  </router-link>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "VLogotype",
    computed: {
      ...mapGetters({
        isDarkThemeMode: 'theme/isDarkThemeMode'
      })
    }
  }
</script>

<style scoped>
  .v-logotype {
    display: block;
    width: 48px;
    height: 48px;
  }
</style>