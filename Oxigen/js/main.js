$(function () {
    $('.menu__btn').on('click', function(){
        $('.menu ul').slideToggle();
    });
    $('.portfolio__btn').on('click', function(){
        $('.portfolio__buttons ul').slideToggle();
    });

    $('.slider__inner').slick({

        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        dots: true,
    });
    $('.footer-to__up-btn').click(function () {
        $('body').animate({ scrollTop: 0 }, 300);
        $('html').animate({ scrollTop: 0 }, 300);
    });

    
    
});

