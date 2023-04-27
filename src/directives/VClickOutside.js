export default {
	name: 'click-outside',
	mounted(el, binding) {
		el.clickHandlerOutsideElement = (event) => {
			if (!(el === event.target || el.contains(event.target))) {
				binding.value(event, el);
			}
		};
		document.body.addEventListener('click', el.clickHandlerOutsideElement, true);
	},
	unmounted(el) {
		document.body.removeEventListener('click', el.clickHandlerOutsideElement, true);
	}
};
