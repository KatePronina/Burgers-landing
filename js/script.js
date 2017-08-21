// всплывающее меню на мобильных устройствах

$(function() {
	var popupMenu = $('.mobile-menu'),
		openButton = $('.header__menu-adaptive'),
		closeButton = $('.mobile-menu__btn');

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

// аккордеон в секции с командой

$(function () {
	$('.team-content__acc-link').on('click', function (e) {
    	e.preventDefault()

    	var elem = $(e.target),
      		item = elem.closest('.team-content__acc-element'),
      		content = item.find('.team-content__member-wrapper'),
      		reqHeight = item.find('.team-content__member').outerHeight(),
      		items = item.siblings(),
      		otherContent = items.find('.team-content__member-wrapper');

    	if (!item.hasClass('team-content__acc-element_active')) {
      		items.removeClass('team-content__acc-element_active');
      		item.addClass('team-content__acc-element_active');

      		otherContent.css({
        		'height': 0
      		});

      		content.css({
        		'height': reqHeight
      		})
    	} else {
      		item.removeClass('team-content__acc-element_active')
      		content.css({
        		'height': 0
      		})
    	}
  })
});

// горизонтальный аккордеон в секции с меню

$(function () {
  	$('.menu__link').on('click', function (e) {
    	e.preventDefault()

    	var elem = $(e.target),
      		item = elem.closest('.menu__element'),
      		content = item.find('.menu__description-wrapper'), 
      		reqWidth = $(window).width() - $(item).width() * 3, 
      		items = item.siblings(),
      		otherContent = items.find('.menu__description-wrapper'); 

 		if ($(window).width() > 800) {
 			reqWidth = item.find('.menu__description').outerWidth();
 		} else {
 			reqWidth = $(window).width() - $(item).width() * 3;
 		}

    	if (!item.hasClass('menu__element_active')) {
      		items.removeClass('menu__element_active');
      		item.addClass('menu__element_active');

      		otherContent.css({
        		'width': 0
      		});

      		content.css({
        		'width': reqWidth
      		})
    	} else {
      		item.removeClass('menu__element_active')
      		content.css({
        		'width': 0
      		})
    	}
  })
});

// всплывающее окно с отзывом

$(function() {
	var popupFeedback = $('.modal-feedback'),
		openButton = $('.feedback__item-more'),
		openButtonMobile = $('.feedback__item-more-adaptive'),
		closeButton = $('.modal-feedback-content__btn');

	openButton.on('click', function(e) {
		e.preventDefault();

		popupFeedback.fadeIn(300);
	});

	openButtonMobile.on('click', function(e) {
		e.preventDefault();

		popupFeedback.fadeIn(300);
	});

	closeButton.on('click', function(e) {
		e.preventDefault();

		popupFeedback.fadeOut(300);
	});
});



// маска номера телефона

$(function(){
	$("#tel").mask("+7(999) 999-9999");
});

// слайдер

$(".owl-carousel").owlCarousel({
	items : 1,
	loop : true,
	nav: true,
	navText: [],
	dots: false
});

// $(function() {

// 	var moveSlide = function (slideNum) {
// 		var $this = $(this),
// 			container = $('.slider'),
// 			items = container.find('.product'),
// 			activeSlide = items.filter('.product_active'),
// 			reqItem = items.eq(slideNum),
// 			reqIndex = reqItem.index(),
// 			list = container.find('.slider__list'), 
// 			duration = 500;

// 		if (reqItem.length) {
// 			list.animate({
// 				'left' : -reqIndex * 100 + '%'
// 			}, duration, function () {
// 				activeSlide.removeClass('product_active');
// 				reqItem.addClass('product_active');
// 			});
// 		}
// 	}

// 	$('.catalog__arrow').on('click', function (e) {
// 		e.preventDefault();

// 		var container = $('.slider'),
// 			items = container.find('.product');
// 			activeItem = items.filter('.product_active'),
// 			button = $(e.target),
// 			existedItem, edgeItem, reqItem;

// 		if (button.hasClass('catalog__arrow-next')) {

// 			existedItem = activeItem.next();
// 			edgeItem = items.first();

// 		} 

// 		if (button.hasClass('catalog__arrow-previous')) {

// 			existedItem = activeItem.prev();
// 			edgeItem = items.last();

// 		}

// 		reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

// 		moveSlide(reqItem);

		

// 	});

// });

// 	AJAX

var submitForm = function (e) {
    e.preventDefault();

    var form = $(e.target);
        
 	var request = ajaxForm(form);

    request.done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            alert(mes);
        } else {
            alert(mes);
        }
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}

var ajaxForm = function (form) {

    var url = form.attr('action'),
        data = form.serialize();

    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });

}

$('#order-form').on('submit', submitForm);


// карта


ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("yandex-map", {
        center: [59.93278740, 30.33241902],
        zoom: 11
    });

    myPlacemark = new ymaps.Placemark([59.97496989, 30.31149391], {
        hintContent: 'ул.Бабушкина, д.12/1, 15',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/i-map_marker.png',
        iconImageSize: [46, 57]
    });

    myPlacemark2 = new ymaps.Placemark([59.95125142, 30.38728882], {
        hintContent: 'ул.Бабушкина, д.12/1, 15'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/i-map_marker.png',
        iconImageSize: [46, 57]
    });

    myPlacemark3 = new ymaps.Placemark([59.91644773, 30.49371887], {
        hintContent: 'ул.Бабушкина, д.12/1, 15'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/i-map_marker.png',
        iconImageSize: [46, 57]
    });

    myPlacemark4 = new ymaps.Placemark([59.88850937, 30.31725097], {
        hintContent: 'ул.Бабушкина, д.12/1, 15'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/i-map_marker.png',
        iconImageSize: [46, 57]
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
}


// one page scroll

$(function() {
	var sections = $('.section'),
		display = $('.main-sections'),
		inScroll = false;

	var performTransition = function (sectionEq) {
		if (inScroll) return
			inScroll = true;

			var position = (sectionEq * -100) + '%';

			display.css({
				'transform' : 'translateY('+ position +')',
				'-webkit-transform' : 'translateY('+ position +')'
			})

			sections.eq(sectionEq).addClass('section-active')
				.siblings().removeClass('section-active');

			setTimeout(function() {
				inScroll = false;
				$('.scroll-bar__elem').eq(sectionEq).addClass('scroll-bar__elem_active')
					.siblings().removeClass('scroll-bar__elem_active');
			}, 1300);
	}

	var defineSections = function (sections) {
		var activeSection = sections.filter('.section-active');
		return {
			activeSection : activeSection,
			nextSection : activeSection.next(),
			prevSection : activeSection.prev()
		}
	}

	$('.wrapper').on('wheel', function (e) {

		var deltaY = e.originalEvent.deltaY;
		var section = defineSections(sections);

		if (deltaY > 0 && section.nextSection.length) { // scroll up
			performTransition(section.nextSection.index());
		}

		if (deltaY < 0 && section.prevSection.length) { // scroll down
			performTransition(section.prevSection.index());
		}
	});

	$(document).on('keydown', function(e) {
		var section = defineSections(sections);

		switch (e.keyCode) {
			case 40: // нажали вверх
				if (section.nextSection.length) {
					performTransition(section.nextSection.index());	
				}
				break;
			case 38: // нажали вниз
				if (section.prevSection.length) {
					performTransition(section.prevSection.index());	
				}
				break;
		}
	});

	$('[data-scroll-to]').on('click', function(e) {
		e.preventDefault();

		var elem = $(e.target);

		performTransition(elem.attr('data-scroll-to'));
	});

});

