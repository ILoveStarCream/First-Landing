window.onload = function () {
    $('.js-reviews-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        dotsClass: "my-dots",

    });

    $('.class').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        // nextArrow: '.class-next',
        // prevArrow: '.class-prev',
        

    });

    // Хеадер меню
    $(document).on('click', '.hide-nav', function () {
        let hideNav = $('.hide-nav');
        let nav = $('.header-nav');
        $(hideNav).toggleClass('active');
        if (nav.is(':visible')) {
            nav.slideUp();
        } else {
            nav.slideDown();
        }
    })
}