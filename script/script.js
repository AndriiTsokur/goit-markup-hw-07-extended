'use strict';

(() => {
	// Automatic header height adjustment
	const { height: pageHeaderHeight } = document.querySelector('.header').getBoundingClientRect();
	const html = document.querySelector('html');

	document.body.style.paddingTop = `${pageHeaderHeight}px`;

	// Adaptive Menu
	let adaptiveMenu = document.querySelector('.header-menu-wrapper');
	let menuBtnOpen = document.querySelector('.header-menu-btn-open');
	let menuBtnClose = document.querySelector('.header-menu-btn-close');

	menuBtnOpen.addEventListener('click', toggleMenu);
	menuBtnClose.addEventListener('click', toggleMenu);

	function toggleMenu() {
		adaptiveMenu.classList.toggle('menu-is-shown');
		html.classList.toggle('is-frozen');
	}
})();
