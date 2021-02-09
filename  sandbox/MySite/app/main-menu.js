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

    $(document).on('click', '.burger', function(){
        $(this).toggleClass('is-active');
        $('.header__nav-wrap').toggleClass('is-active');
    });
});