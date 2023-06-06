export default {
	methods: {
		formatDate(dateString) {
			const options = {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric'
			};
			const date = new Date(dateString);
			const formattedDate = date.toLocaleDateString('en-US', options);

			return `${formattedDate}`;
		}
	}
};
