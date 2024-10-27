const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".m-menu");
const filterMenu = document.querySelector(".filter-menu");
const filterMenuButton = document.querySelector(".m-filter");

menuButton.addEventListener('click', () => {
	menu.classList.toggle("is-open");
});

filterMenuButton.addEventListener('click', () => {
	filterMenu.classList.toggle("is-open");
});