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

    // Clipboard Stuff
    var showMessage = function ($selector, message) {
        $selector.text(message);
        $selector.fadeToggle(500, function () {
            $(this).fadeToggle(4000, function () {
                $selector.text('');
            });
        });
    }

    var clipboard = new Clipboard('.button-copy');

    clipboard.on('success', function(e) {
        var $message = $(e.trigger).next('.message');
        showMessage($message, 'Copied!');

        var characterName = $(e.trigger).attr('data-character-name');
        _gs('event', 'Automatically copied ' + characterName);

        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        var $message = $(e.trigger).next('.message');
        showMessage($message, 'Control + C to copy');

        var characterName = $(e.trigger).attr('data-character-name');
        _gs('event', 'Failed to manually copy ' + characterName);

    });

    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


});
