import AuthService from "@/service/AuthService";

export const authModule = {
    namespaced: true,
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
    }),
    mutations: {
        setUser(state, obj) {
            localStorage.setItem('user', JSON.stringify(obj));
            state.user = obj;
        },
        setToken(state, string) {
            localStorage.setItem('token', string);
            state.token = string;
        }
    },
    actions: {
        signIn({ commit }, { email, password }) {
            return new Promise((resolve, reject) => {
                AuthService.signIn(email, password)
                .then(response => {
                    commit('setToken', response.data.accessToken);
                    commit('setUser', response.data.user);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
            });
        }
    }
}