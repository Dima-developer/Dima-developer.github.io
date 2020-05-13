$(function () {
    // Фиксированное меню
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 650) $('.header__top').css({'top': '0', 'position': 'relative'});
        else $('.header__top').css({'top': '0px', 'position': 'fixed', 'width': '100%'});
        if (top < 650) $('.header__content').css({'margin-top': '0px'});
        else $('.header__content').css({'margin-top': '94px'});
        });
           // Кнопка меню
    $('.menu__btn').on('click', function(){
        $('.menu ul').slideToggle();
    });
    $('.menu__link').click(function(){
        $('.menu ul').slideToggle();
    })
    $('.portfolio__btn').on('click', function(){
        $('.portfolio__buttons ul').slideToggle();
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div1 = $('.menu__list'); // тут указываем ID элемента или класс
        var div2 = $('.portfolio__buttons ul');
        if (!div1.is(e.target) // если клик был не по нашему блоку
            && div1.has(e.target).length === 0) { // и не по его дочерним элементам
            div1.hide(); // скрываем его
        }
        if (!div2.is(e.target) 
            && div2.has(e.target).length === 0) { 
            div2.hide(); 
        }
    });
    // Слайдер
    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        dots: true,
    });
    // Кнопка вверх
    $('.footer-to__up-btn').click(function () {
        $('body').animate({ scrollTop: 0 }, 300);
        $('html').animate({ scrollTop: 0 }, 300);
    });
    // Плавный скролинг при выборе элемента в меню
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 2000);
	});
});