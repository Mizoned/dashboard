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
        },
        deleteUser(state) {
            localStorage.removeItem('user');
            state.user = {};
        },
        deleteToken(state) {
            localStorage.removeItem('token');
            state.token = null;
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
        },
        sendRegistrationCode({ commit }, email) {
            return new Promise((resolve, reject) => {
                AuthService.sendRegistrationCode(email)
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        verifyRegistrationCode({ commit }, { email, code }) {
            return new Promise((resolve, reject) => {
                AuthService.verifyRegistrationCode(email, code)
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        signUp({ commit }, { email, password}) {
            return new Promise((resolve, reject) => {
                AuthService.signUp(email, password)
                    .then(response => {
                        commit('setToken', response.data.accessToken);
                        commit('setUser', response.data.user);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                AuthService.logout().then(response => {
                    commit('deleteToken');
                    commit('deleteUser');
                    resolve(response);
                }).catch(error => {
                    reject(error);
                })
            })
        }
    }
}