import $api from '@/http';

export default class AuthService {
	static async signIn(email, password) {
		return $api.post('/auth/sign-in', { email, password });
	}

	static async signUp(email, password) {
		return $api.post('/auth/sign-up', { email, password });
	}

	static async logout() {
		return $api.post('/auth/logout');
	}

	static async sendRegistrationCode(email) {
		return $api.post('/auth/send-registration-code', email);
	}

	static async verifyRegistrationCode(email, code) {
		return $api.post('/auth/verify-registration-code', { email, code });
	}
}
