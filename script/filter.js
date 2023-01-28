'use strict';

(() => {
	let portfolioItems = document.querySelectorAll('.portfolio-item');
	let filterRadios = document.querySelectorAll('.portfolio-filter-radio');

	for (let radio of filterRadios) {
		radio.addEventListener('click', function () {
			if (radio.value === 'all') {
				portfolioItems.forEach(item => {
					item.classList.remove('portfolio-item-is-hidden');

					setTimeout(function () {
						item.classList.remove('portfolio-item-transform');
					}, 250);
				});
			} else {
				portfolioItems.forEach(item => {
					if (item.dataset.filter === radio.value) {
						item.classList.remove('portfolio-item-is-hidden');

						setTimeout(function () {
							item.classList.remove('portfolio-item-transform');
						}, 250);
					} else {
						item.classList.add('portfolio-item-transform');

						setTimeout(function () {
							item.classList.add('portfolio-item-is-hidden');
						}, 250);
					}
				});
			}
		});
	}
})();
