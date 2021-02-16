jQuery(document).ready(function(){

    var header = $('.header');
    var nav = $('.nav--header');

    window.onscroll = function() {
        if(window.pageYOffset > header.height()) {
            nav.addClass('nav--move');
        } else {
            nav.removeClass('nav--move');
        }
    }

    var clickHandler = ("ontouchstart" in window ? "touchend" : "click")

    $(document).on(clickHandler, '.burger', function(){
        var userAgent = window.navigator.userAgent;
        $(this).toggleClass('is-active');
        $('.header_nav-wrap').toggleClass('is-active');
    });

    $('#mc-form').ajaxChimp({
        url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'
    });
});

