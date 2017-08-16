// всплывающее меню на мобильных устройствах

$(function() {
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
        iconImageHref: '../img/i-map_marker.png',
        iconImageSize: [46, 57]
    });

    myPlacemark2 = new ymaps.Placemark([59.95125142, 30.38728882], {
        hintContent: 'ул.Бабушкина, д.12/1, 15'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/i-map_marker.png',
        iconImageSize: [46, 57]
    });

    myPlacemark3 = new ymaps.Placemark([59.91644773, 30.49371887], {
        hintContent: 'ул.Бабушкина, д.12/1, 15'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/i-map_marker.png',
        iconImageSize: [46, 57]
    });

    myPlacemark4 = new ymaps.Placemark([59.88850937, 30.31725097], {
        hintContent: 'ул.Бабушкина, д.12/1, 15'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/i-map_marker.png',
        iconImageSize: [46, 57]
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
}



