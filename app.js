const heaD = document.getElementById('main_picture');
const aboutMeF = document.getElementById('about_me-f');
const aboutMeS = document.getElementById('about_me-s')


function createH(tagName, clName, clName2, text) {
    let firstH = document.createElement(tagName);
    firstH.classList.add(clName, clName2);
    firstH.innerHTML = text;
    heaD.append(firstH);
};

function createH2() {
    let secondH = document.createElement('h2');
    secondH.classList.add('about_me-title', 'animation_fadeInLeft');
    secondH.innerHTML = 'MY SKILLS';
    aboutMeF.append(secondH);
};


function createImg(tagName, atrib, value) {
    let firstImg = document.createElement(tagName);
    firstImg.classList.add('animation_fadeInRight');
    firstImg.setAttribute(atrib, value)
    return firstImg;
};

function createP(tagName, clName, text) {
    let secondP = document.createElement(tagName);
    secondP.classList.add(clName, 'animation_fadeInRight');
    secondP.innerHTML = text;
    return secondP;
};




(function foo() {
    setTimeout(() => {
        createH('h1','title1', 'animation_backInLeft', 'YOUR'); 
    }, 1);
    setTimeout(() => {
        createH('h1','title2', 'animation_backInRight', 'FRONT-END'); 
    }, 500);
    setTimeout(() => {
        createH('h1','title3', 'animation_backInLeft', 'DEVELOPER'); 
    }, 1000);
    setTimeout(() => {
        createH('p', 'text_style', 'animation_backInUp', 'My name is Nikolay Moroka');
        createH('p', 'text_style', 'animation_backInUp', 'I will create the best website for your buisness');
    }, 2000);
})();


    // function create() {
    //     let secondH = document.createElement('h2');
    //     secondH.classList.add('about_me');
    //     secondH.innerHTML = 'MY SKILLS';
    //     aboutMe.append(secondH);
    // };

window.onscroll = scroller;
let flag = 0;

function scroller() {
    if(flag == 0) {
        if(window.pageYOffset > 300) {
            createH2();
            setTimeout(() => {
                let createDiv = document.createElement('div');
                createDiv.classList.add('divStyle');
                aboutMeS.append(createDiv);
                createDiv.append(
                    createP('p', 'style_text_in_p', 'HTML / CSS'),
                    createImg('img', 'src', 'img/html.png'),
                    createImg('img', 'src', 'img/css.png')
                    );     
            }, 1);
            setTimeout(() => {
                let createDiv = document.createElement('div');
                aboutMeS.append(createDiv);
                createDiv.append(
                    createP('p', 'style_text_in_p', 'SASS / SCSS preprocessors'),
                    createImg('img', 'src', 'img/sass.png')
                    ); 
            }, 200);
            setTimeout(() => {
                let createDiv = document.createElement('div');
                aboutMeS.append(createDiv);
                createDiv.append(
                    createP('p', 'style_text_in_p', 'Cross-browser / valid / adaptive layout')
                    ); 
            }, 400);
            setTimeout(() => {
                let createDiv = document.createElement('div');
                aboutMeS.append(createDiv);
                createDiv.append(
                    createP('p', 'style_text_in_p', 'JavaScript (ES6, ES6+)'),
                    createImg('img', 'src', 'img/js.png')
                    ); 
            }, 600);
            setTimeout(() => {
                let createDiv = document.createElement('div');
                aboutMeS.append(createDiv);
                createDiv.append(
                    createP('p', 'style_text_in_p', 'JQuery'),
                    createImg('img', 'src', 'img/jquery.png')
                    ); 
            }, 800);
            setTimeout(() => {
                let createDiv = document.createElement('div');
                aboutMeS.append(createDiv);
                createDiv.append(
                    createP('p', 'style_text_in_p', 'Bootstrap'),
                    createImg('img', 'src', 'img/bootstrap.png')
                    ); 
            }, 1000);
            flag = 1;
        }
    }
}


  
//  elem.setAttribute(name, value) – устанавливает атрибут
  

// function createImg(tagName, atrib, value) {
//     let firstImg = document.createElement(tagName);
//     firstImg.classList.add('animation_fadeInRight');
//     firstImg.setAttribute(atrib, value)
//     aboutMeS.append(firstImg);
// };

