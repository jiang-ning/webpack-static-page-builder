import $ from 'jquery';

if(typeof jQuery == 'undefined') {
    window.jQuery = $;
    window.$ = $;
}

let activekeyVisualText = $('.keyVisual-section .nav-tab-list li.active').text();
let crrkeyVisualText = $('.keyVisual-section .nav-title span').text();

$(window).on('load', function () {
    $('body').removeClass('loading-fixed');
    $('.brand-loading').fadeOut(500);

    doscroll();
    backToTop();
    updateLangSwitcher();

    // site address
    $('.company-site a').on('click', function () {
        $('.company-site li').removeClass('active');
        $('.company-address div').removeClass('active');
        $('.company-site li').eq($('.company-site a').index(this)).addClass('active');
        $('.company-address div').eq($('.company-site a').index(this)).addClass('active');
    });

    // site address - mobile
    $('.company-site-collapse').on('click', function() {
        $('.company-site-collapse').toggleClass('active');
        $('.company-site').toggleClass('active');
        $('.company-address').toggleClass('active');
    });
});

$(document).on('ready', function () {
    if ($('body').hasClass('about-us')) {
        $('#navbar li.about-us').addClass('nav-active');
    }
    if ($('body').hasClass('product-service')) {
        $('#navbar li.product-service').addClass('nav-active');
    }
});

$(window).on('scroll', function () {
    doscroll();
    $(".change-lang").removeClass('open');

    var scrolltop = $(window).scrollTop();
    if (document.querySelector('.keyVisual-section') && $(window).width() > 767) {
        49 < scrolltop ?
            $('.keyVisual-section .kv-nav').addClass('subnav-fixed-top') :
            $('.keyVisual-section .kv-nav').removeClass('subnav-fixed-top');
        49 < scrolltop ?
            $('.keyVisual-section .kv-nav .nav-container').addClass(
                'nav-container-no-line'
            ) :
            $('.keyVisual-section .kv-nav .nav-container').removeClass(
                'nav-container-no-line'
            );
        49 < scrolltop ?
            $('header nav').addClass('navbar-relative-top') :
            $('header nav').removeClass('navbar-relative-top');
    }
    if (($('body').hasClass('credit-services') && $('body').hasClass('en')) || ($('body').hasClass('solution') && $('body').hasClass('en'))) {
        $('.keyVisual-section .kv-nav').removeClass('subnav-fixed-top');
        $('.keyVisual-section .kv-nav .nav-container').removeClass(
            'nav-container-no-line'
        );
        49 < scrolltop ?
            $('.keyVisual-section .kv-nav').addClass('subnav-fixed-top') :
            $('.keyVisual-section .kv-nav').removeClass('subnav-fixed-top');
        49 < scrolltop ?
            $('header nav').addClass('navbar-relative-top') :
            $('header nav').removeClass('navbar-relative-top');
        10 < scrolltop ?
            $('.keyVisual-section .kv-nav').addClass('subnav-fixed-top-m') :
            $('.keyVisual-section .kv-nav').removeClass('subnav-fixed-top-m');
        $('.nav-tab-list').hide(0);
        $('.keyVisual-section .bg-gray').hide(0);
        $('.kv-nav').removeClass('bg-white');
        $('.nav-container').removeClass('active-nav-container');
    } else {
        if ($(window).width() < 768) {
            $('.keyVisual-section .kv-nav').removeClass('subnav-fixed-top');
            $('.keyVisual-section .kv-nav .nav-container').removeClass('nav-container-no-line');
            49 < scrolltop ?
                $('.keyVisual-section .kv-nav').addClass('subnav-fixed-top') :
                $('.keyVisual-section .kv-nav').removeClass('subnav-fixed-top');
            49 < scrolltop ?
                $('header nav').addClass('navbar-relative-top') :
                $('header nav').removeClass('navbar-relative-top');
            10 < scrolltop ?
                $('.keyVisual-section .kv-nav').addClass('subnav-fixed-top-m') :
                $('.keyVisual-section .kv-nav').removeClass('subnav-fixed-top-m');
            $('.nav-tab-list').hide(0);
            $('.keyVisual-section .bg-gray').hide(0);
            $('.kv-nav').removeClass('bg-white');
            $('.nav-container').removeClass('active-nav-container');
        }
    }
});

$(window).on('resize', function () {
    if ($(window).width() >= 768) {
        $('#navbar').collapse('hide');
        $('body').css({
            position: 'static'
        });
    }

    if ($(window).width() > 768) {
        $('.nav-tab-list').show(0);
    } else if ($(window).width() < 768) {
        $('.nav-tab-list').hide(0);
    }
});

$(window).on('load resize', function () {
    if ($(window).width() < 768) {
        $('.keyVisual-section .nav-title span').text(activekeyVisualText);
    } else if ($(window).width() >= 768) {
        $('.keyVisual-section .nav-title span').text(crrkeyVisualText);
    }
});

// 2nd nav and kv
$('.keyVisual-section .nav-title, .keyVisual-section .nav-title .btn-arr').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();

    if (($('body').hasClass('credit-services') && $('body').hasClass('en')) || ($('body').hasClass('solution') && $('body').hasClass('en'))) {
        $('.nav-tab-list').toggle(0);
        $('.bg-gray').toggle(0);
        $('.kv-nav').toggleClass('bg-white');
        $('.nav-container').toggleClass('active-nav-container');
    } else {
        if ($(window).width() < 768) {
            $('.nav-tab-list').toggle(0);
            $('.bg-gray').toggle(0);
            $('.kv-nav').toggleClass('bg-white');
            $('.nav-container').toggleClass('active-nav-container');
        }
    }
});

$('.keyVisual-section .bg-gray').on('click', function () {
    if (($('body').hasClass('credit-services') && $('body').hasClass('en')) || ($('body').hasClass('solution') && $('body').hasClass('en'))) {
        $('.nav-tab-list').hide(0);
        $('.bg-gray').hide(0);
        $('.kv-nav').removeClass('bg-white');
        $('.nav-container').removeClass('active-nav-container');
    } else {
        if ($(window).width() < 768) {
            $('.nav-tab-list').hide(0);
            $('.bg-gray').hide(0);
            $('.kv-nav').removeClass('bg-white');
            $('.nav-container').removeClass('active-nav-container');
        }
    }
});

$('.keyVisual-section .kv-nav ul.nav-tab-list li a').on('click', function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
    if ($(window).width() < 768) {
        $('.nav-tab-list').hide(0);
        $('.bg-gray').hide(0);
        $('.kv-nav').removeClass('bg-white');
        $('.nav-container').removeClass('active-nav-container');
    }
});

function doscroll() {
    var scrolltop = $(window).scrollTop();
    if (document.querySelector('.home')) {
        if ($(window).width() < 768) {
            0 < scrolltop ?
                $('header nav').addClass('top-color') :
                $('header nav').removeClass('top-color');
            return;
        }
        39 < scrolltop ?
            $('header nav').addClass('top-color') :
            $('header nav').removeClass('top-color');
    }
}

function updateLangSwitcher() {
    let path = window.location.pathname;

    if(path.includes('/en')) {
        path = path.replace('/en', '/zh_chs');
        $('header .lang-menu li').eq(0).find('a').attr('href', path);
    }
    if(path.includes('/zh_chs')) {
        path = path.replace('/zh_chs', '/en');
        $('header .lang-menu li').eq(1).find('a').attr('href', path);
    }
}

function backToTop() {
    const backButton = $('.back-to-top');
    function animate() {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    };

    function scroll() {
        if ($(window).scrollTop() > 50) {
            backButton.fadeIn();
        } else {
            backButton.fadeOut();
        }   
    };
    backButton.on('click', animate);
    $(window).on('scroll', scroll);
    $(window).trigger('scroll');
}

// for mobile
setTimeout(() => {
    $('#navbar').on('show.bs.collapse', function () {
        $('.navbar-default').addClass('navbar-transparent');
        $('body').css({
            position: 'fixed',
            width: '100%'
        });
        $('.bg-home-gray').slideDown(100);
    });
    $('#navbar').on('hide.bs.collapse', function () {
        $('.navbar-default').removeClass('navbar-transparent');
        $('body').css({
            position: 'static'
        });
        $('.bg-home-gray').slideUp();
    });
}, 0);
