$(document).ready(function () {
    $(window).scroll(function (event) {
        var w = $(this).outerWidth();
        var s = $(this).scrollTop();
        var h = $('.page__content').outerHeight();
        var h_b = $('.page__body').outerHeight();
        var p = s / h * 100;
        var p_b = s / h_b * 250;
        var t_1 = 1 + (w / 4000000 * p);
        var t_2 = 1 + (w * 0.0004 * p_b);
        var t_3 = 1 + (w * 0.000008 * p_b);
        var hr_1 = w / 2500 * p_b;
        var hr_2 = w / 1500* p_b;

        $('.parallax__town_1').css('transform', 'scale(' + t_1 + ')');
        $('.parallax__town_2').css('transform', 'scale(' + t_2 + ') translate3d(' + hr_1 + 'px,0,0)');
        $('.parallax__town_3').css('transform', 'scale(' + t_3 + ')translate3d(' + hr_2 + 'px,0,0)');
    });
});
