export const themeModule = {
    namespaced: true,
    state: () => ({
        mode: localStorage.getItem('themeMode') === 'light' ? 'light' : 'dark'
    }),
    getters: {
        isDarkThemeMode(state) {
            return state.mode === 'dark';
        }
    },
    mutations: {
        setThemeMode(state, mode) {
            state.mode = mode;
            localStorage.setItem('themeMode', mode);
        }
    },
    actions: {
        toggleThemeMode({ state, commit }) {
            commit('setThemeMode', state.mode === 'light' ? 'dark' : 'light');
        }
    }
}