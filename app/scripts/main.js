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
    var confirm = function (fragment) {
        var $el = $('#copy-' + fragment + ' ~ .copied');
        $el.addClass('show');
        window.setTimeout(function () {
            $el.removeClass('show');
        }, 100)
    };

    var mdash = new ZeroClipboard( document.getElementById('copy-mdash') );
    mdash.on( 'ready', function() {
        mdash.on( 'aftercopy', function() {
            confirm('mdash');
            _gs('event', 'copied emdash');
        });
    });

    var ndash = new ZeroClipboard( document.getElementById('copy-ndash') );
    ndash.on( 'ready', function() {
        ndash.on( 'aftercopy', function() {
            confirm('ndash');
            _gs('event', 'copied endash');
        });
    });

    var hyphen = new ZeroClipboard( document.getElementById('copy-hyphen') );
    hyphen.on( 'ready', function() {
        hyphen.on( 'aftercopy', function() {
            confirm('hyphen');
            _gs('event', 'copied hyphen');
        });
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
