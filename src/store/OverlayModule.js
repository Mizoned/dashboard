export const overlayModule = {
    namespaced: true,
    state: () => ({
        isOverlayActive: false
    }),
    mutations: {
        setIsOverlayActive(state, bool) {
            state.isOverlayActive = bool;
        },
        toggleIsOverlayActive(state) {
            state.isOverlayActive = !state.isOverlayActive;
        }
    }
}