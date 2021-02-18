const heaD = document.getElementById('main_title');

function createTitleMain(tagName, clName, clName2, text) {
    let firstH = document.createElement(tagName);
    firstH.classList.add(clName, clName2);
    firstH.innerHTML = text;
    heaD.append(firstH);
};

(function foo() {
    setTimeout(() => {
        createTitleMain('h1','title_m', 'animation_backInLeft', 'YOUR'); 
    }, 200);
    setTimeout(() => {
        createTitleMain('h1','title_m', 'animation_backInRight', 'FRONT-END'); 
    }, 900);
    setTimeout(() => {
        createTitleMain('h1','title_m', 'animation_backInLeft', 'DEVELOPER'); 
    }, 1400);
    setTimeout(() => {
        createTitleMain('p', 'text', 'animation_backInUp', 'My name is Nikolay Moroka');
        createTitleMain('p', 'text', 'animation_backInUp', 'I will create the best website for your business');
    }, 1900);
})();

(function createAnim() {
    const width = document.documentElement.clientWidth;
    if( width < 576 ) {
        const title = document.getElementsByClassName('h2');
        for (let i = 0; i < title.length; i++) {
            let element1 = title[i];
            element1.dataset.aos = '';
        };
        const info = document.getElementsByClassName('info');
        for (let i = 0; i < info.length; i++) {
            let element2 = info[i];
            element2.dataset.aos = '';
        };
        const img = document.getElementsByClassName('img');
        for (let i = 0; i < img.length; i++) {
            let element3 = img[i];
            element3.dataset.aos = '';
        };
    } else {
        console.log('all right')
    };
})();

// jQuery



jQuery(window).scroll(function () {
    if(jQuery(window).scrollTop() > jQuery(window).height()/3) {
        jQuery('.scrollToTop').toggleClass('showScrollTop', true);
    } else { 
        jQuery('.scrollToTop').removeClass('showScrollTop');
    }
});

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
});

