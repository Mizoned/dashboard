import $api from "@/http";

export default class UserService {
    static async updateProfileData({ email, displayName, location, notifyAboutProductUpdates, notifyAboutMarketNewsletter, notifyAboutComments, notifyAboutPurchases }) {
        return $api.put('/user/update-profile-data',
            {
                email,
                displayName,
                location,
                notifyAboutProductUpdates,
                notifyAboutMarketNewsletter,
                notifyAboutComments,
                notifyAboutPurchases
            }
        );
    }
}