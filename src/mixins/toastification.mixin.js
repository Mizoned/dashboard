import { useToast } from 'vue-toastification';

export default {
	data() {
		return {
			toast: useToast()
		};
	},
	methods: {
		showErrorNotification(message) {
			this.toast.error(message);
		},
		showSuccessNotification(message) {
			this.toast.success(message);
		}
	}
};
