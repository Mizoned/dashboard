import { createStore } from 'vuex';
import { authModule } from '@/store/AuthModule';
import { themeModule } from "@/store/ThemeModule";

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
    theme: themeModule
  }
})
