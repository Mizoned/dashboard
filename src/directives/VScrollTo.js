export default {
	name: 'scroll-to',
	mounted(el, binding) {
		const headerHeight = 96;

		let target = document.querySelector(binding.value.targetSelector);
		if (!target) {
			throw new Error(`Внутренний элемент ${binding.value.parentSelector} родителя не определен`);
		}

		let parent = binding.value.parentSelector
			? el.closest(binding.value.parentSelector)
			: el.parentElement;
		if (!parent) {
			throw new Error(
				`Родительский элемент с селектором ${binding.value.parentSelector} не определен`
			);
		}

		el?.addEventListener('click', () => {
			if (target) {
				let scrollTop = target.getBoundingClientRect().top - headerHeight;
				parent.scrollTop = scrollTop + parent.scrollTop;
			}
		});
	}
};
