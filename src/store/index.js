import { createStore } from 'vuex';
import { authModule } from '@/store/AuthModule';
import { themeModule } from "@/store/ThemeModule";
import { overlayModule } from "@/store/OverlayModule";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: authModule,
    theme: themeModule,
    overlay: overlayModule
  }
})
