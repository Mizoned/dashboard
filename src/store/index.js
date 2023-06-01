import { createStore } from 'vuex';
import { authModule } from '@/store/AuthModule';
import { themeModule } from '@/store/ThemeModule';
import { overlayModule } from '@/store/OverlayModule';
import { sidebarModule } from '@/store/SidebarModule';
import { userModule } from '@/store/UserModule';

export default createStore({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		themeModule,
		overlayModule,
		sidebarModule,
		userModule,
		authModule
	}
});
