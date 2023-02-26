<template>
  <div class="main">
    <v-header class="main__header"></v-header>
    <v-sidebar class="main__sidebar"/>
    <div class="main__view">
      <div class="main__container">
        <h1 class="main__title h3">{{ $route.name }}</h1>
        <router-view></router-view>
      </div>
    </div>
    <v-overlay/>
  </div>
</template>

<script>
import VHeader from "@/components/Header.vue";
import VSidebar from "@/components/Sidebar.vue";
import VOverlay from "@/components/VOverlay.vue";

export default {
  name: "DashboardLayout",
  components: {
    VOverlay, VHeader, VSidebar
  }
}
</script>

<style scoped lang="scss">
  .main {
    display: grid;
    grid-template-columns: 340px 1fr;
    grid-template-rows: 96px 1fr;
    height: 100vh;

    &__sidebar {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    &__header {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    &__view {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
      width: 100%;
      height: 100%;
      overflow-x: auto;
      padding: 40px;

      @media only screen and (max-width: 768px) {
        padding: 24px 16px;
      }
    }

    &__title {
      margin-bottom: 16px;
    }

    &__container {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }

    @media only screen and (max-width: 1250px) {
      grid-template-columns: 96px 1fr;
    }

    @media only screen and (max-width: 768px) {
      grid-template-columns: 0 1fr;
      grid-template-rows: 80px 1fr;
    }
  }
</style>