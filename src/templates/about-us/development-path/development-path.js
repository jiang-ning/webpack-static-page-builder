$('.time-across').on('click', 'span', function (e) {
    $('.time-across span').removeClass('time-active');
    $(this).addClass('time-active');
    var i = $(this).index();
    if (i == 0) {
        $('.development-content .year').find('.develop-item').removeClass('last-item');
        $('.development-content .year').last().find('.develop-item').last().addClass('last-item');
        $('.development-content .year').show();
    } else {
        $('.development-content .year').hide();
        $('.development-content .year').eq(i - 1).find('.develop-item').last().addClass('last-item');
        $('.development-content .year').eq(i - 1).show();
    }
});