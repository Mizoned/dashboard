import $api from '@/http';

export default class AuthService {
	static async signIn(email, password) {
		return $api.post('/user/sign-in', { email, password });
	}

	static async signUp(email, password) {
		return $api.post('/user/sign-up', { email, password });
	}

	static async logout() {
		return $api.post('/user/logout');
	}

	static async sendRegistrationCode(email) {
		return $api.post('/user/send-registration-code', email);
	}

	static async verifyRegistrationCode(email, code) {
		return $api.post('/user/verify-registration-code', { email, code });
	}
}
