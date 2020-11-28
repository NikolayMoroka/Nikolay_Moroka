const heaD = document.getElementById('main_picture');
const aboutMe = document.getElementById('about_me')


function createH(tagName, clName, text) {
    let firstH = document.createElement(tagName);
    firstH.classList.add(clName);
    firstH.innerHTML = text;
    heaD.append(firstH);
};




(function foo() {
    setTimeout(() => {
        createH('h1','title1', 'YOUR'); 
    }, 1);
    setTimeout(() => {
        createH('h1','title2', 'FRONT-END'); 
    }, 500);
    setTimeout(() => {
        createH('h1','title3', 'DEVELOPER'); 
    }, 1000);
    setTimeout(() => {
        createH('p', 'animation-type-backInUp', 'My name is Nikolay Moroka');
        createH('p', 'animation-type-backInUp', 'I will create the best website for your buisness');
    }, 2000);
   
})();






