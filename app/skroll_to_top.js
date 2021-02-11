jQuery(window).scroll(function () {
    if(jQuery(window).scrollTop() > jQuery(window).height()/3){
    jQuery('.scrollToTop').toggleClass('showScrollTop', true);
    } else { jQuery('.scrollToTop').removeClass('showScrollTop');
    }
});