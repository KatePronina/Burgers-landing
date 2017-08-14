$(document).ready(function() {

	var popupMenu = $('.mobile-menu');
	var openButton = $('.header__menu-adaptive');
	var closeButton = $('.mobile-menu__btn');

	openButton.on('click', function(e) {
		e.preventDefault();

		popupMenu.fadeIn(300);
		$('.header__logo').css('position', 'fixed');
	});

	closeButton.on('click', function(e) {
		e.preventDefault();

		popupMenu.fadeOut(300);
		$('.header__logo').css('position', 'static');
	});

});




// var popupMenu = document.querySelector(".mobile-menu");
// var openButton = document.querySelector(".header__menu-adaptive");
// var closeButton = document.querySelector(".mobile-menu__btn");

// openButton.addEventListener("click", function (event) {
// 	event.preventDefault();
// 	popupMenu.classList.add("mobile-menu_open");
// });

// closeButton.addEventListener( "click", function (event) {
// 	event.preventDefault();
// 	popupMenu.classList.remove("mobile-menu_open");
// });
