import UserService from "@/service/UserService";

export const userModule = {
    namespaced: true,
    actions: {
        updateProfileData({ commit }, { displayName, email, location, notifyAboutProductUpdates, notifyAboutMarketNewsletter, notifyAboutComments, notifyAboutPurchases }) {
            return new Promise((resolve, reject) => {
                UserService.updateProfileData(displayName, email, location, notifyAboutProductUpdates, notifyAboutMarketNewsletter, notifyAboutComments, notifyAboutPurchases)
                    .then(response => {
                        commit('auth/setUser', response.data.user, { root: true });
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        updateProfilePassword({ commit }, { oldPassword, newPassword, confirmNewPassword }) {
            return new Promise((resolve, reject) => {
                UserService.updateProfilePassword(oldPassword, newPassword, confirmNewPassword)
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    })
            })
        }
    }
}