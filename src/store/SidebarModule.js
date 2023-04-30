export const sidebarModule = {
	namespaced: true,
	state: () => ({
		isSidebarOpen: false
	}),
	mutations: {
		setIsSidebarOpen(state, bool) {
			state.isSidebarOpen = bool;
		}
	},
	actions: {
		sidebarOpenHandler({ commit }, bool) {
			if (window.innerWidth > 1250) return;
			commit('setIsSidebarOpen', bool);
			commit('overlay/setIsOverlayActive', bool, { root: true });
		}
	}
};
