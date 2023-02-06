<template>
  <div :class="[ 'app', { 'light-theme' : !isDarkThemeMode } ]">
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isDarkThemeMode: 'theme/isDarkThemeMode'
    })
  }
}
</script>