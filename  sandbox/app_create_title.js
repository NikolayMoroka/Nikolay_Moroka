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
    }, 1);
    setTimeout(() => {
        createTitleMain('h1','title_m', 'animation_backInRight', 'FRONT-END'); 
    }, 700);
    setTimeout(() => {
        createTitleMain('h1','title_m', 'animation_backInLeft', 'DEVELOPER'); 
    }, 1200);
    setTimeout(() => {
        createTitleMain('p', 'text_style', 'animation_backInUp', 'My name is Nikolay Moroka');
        createTitleMain('p', 'text_style', 'animation_backInUp', 'I will create the best website for your buisness');
    }, 2000);
})();