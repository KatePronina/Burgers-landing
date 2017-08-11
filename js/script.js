var popupMenu = document.querySelector(".mobile-menu");
var openButton = document.querySelector(".header__menu-adaptive");
var closeButton = document.querySelector(".mobile-menu__btn");

openButton.addEventListener("click", function (event) {
	event.preventDefault();
	popupMenu.classList.add("mobile-menu_open");
});

closeButton.addEventListener( "click", function (event) {
	event.preventDefault();
	popupMenu.classList.remove("mobile-menu_open");
});
