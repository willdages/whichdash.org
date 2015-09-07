// jshint devel:true

$(function($){
    // Keeps the two nav items' hover states in sync
    $('.js-hover-trigger').each(function (i, e) {
        var href = $(e).attr('href');

        $(e).on('mouseover', function () {
            $('.sitenav a[href="' + href + '"]').addClass('active');
        });

        $(e).on('mouseleave', function () {
            $('.sitenav a[href="' + href + '"]').removeClass('active');
        });

    });
});
