$(function () {
    // Фиксированное меню
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 100) $(".header__top").css({top: '0', position: 'relative'});
        else $(".header__top").css({top: '0', position: 'fixed', width: '100%'});
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