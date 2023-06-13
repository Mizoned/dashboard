export default {
	data() {
		return {
			timeout: null
		};
	},
	methods: {
		debounce(fn, delay) {
			return () => {
				clearTimeout(this.timeout);
				this.timeout = setTimeout(() => {
					fn.apply(this, arguments);
				}, delay);
			};
		}
	}
};
