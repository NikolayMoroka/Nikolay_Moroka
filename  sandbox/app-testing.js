AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 150, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });


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
    }, 500);
    setTimeout(() => {
        createTitleMain('h1','title_m', 'animation_backInRight', 'FRONT-END'); 
    }, 1200);
    setTimeout(() => {
        createTitleMain('h1','title_m', 'animation_backInLeft', 'DEVELOPER'); 
    }, 1700);
    setTimeout(() => {
        createTitleMain('p', 'text_style', 'animation_backInUp', 'My name is Nikolay Moroka');
        createTitleMain('p', 'text_style', 'animation_backInUp', 'I will create the best website for your buisness');
    }, 2200);
})();