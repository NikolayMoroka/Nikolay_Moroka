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
        $('.header__nav-wrap').toggleClass('is-active');
    });
});