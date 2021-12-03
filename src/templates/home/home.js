import * as bootstrap from 'bootstrap';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';


/**
 * Home Page Silde
 */
function homeSwiper() {
    const mySwiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        simulateTouch: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
}

if (document.querySelector('.swiper')) {
    $(window).on("load", function () {
        if ($(window).width() > 1024) {
            $('.mask .slide-img-pc').each(function (i, ele) {
                $(ele).parent().css("background-image", "url(" + $(ele).attr('src') + ")");
            });
            setTimeout(() => {
                $('.mask .slide-img-pc').css({
                    "display": "none"
                });
            }, 10);
        }
        homeSwiper();
    });
    $(window).on("resize", function () {
        if ($(window).width() > 1024) {
            $('.mask .slide-img-pc').each(function (i, ele) {
                $(ele).parent().css("background-image", "url(" + $(ele).attr('src') + ")");
            });
            setTimeout(() => {
                $('.mask .slide-img-pc').css({
                    "display": "none"
                });
            }, 10);
        }
    });
}

function partnerSwiper() {
    if (document.querySelector('.partner-swiper-container')) {
        var partner = new Swiper('.partner-swiper-container', {
            modules: [Pagination],
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
        });
    }
}
$(window).on('load', function () {
    partnerSwiper();
});
