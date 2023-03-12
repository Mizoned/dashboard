import UserService from "@/service/UserService";

export const userModule = {
    namespaced: true,
    actions: {
        updateProfileData({ commit }, data) {
            return new Promise((resolve, reject) => {
                UserService.updateProfileData(data)
                    .then(response => {
                        commit('auth/setUser', response.data.user, { root: true });
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
}