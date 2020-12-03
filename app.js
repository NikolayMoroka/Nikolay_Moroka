const heaD = document.getElementById('main_picture');
const aboutMeF = document.getElementById('about_me-f');
const aboutMeS = document.getElementById('about_me-s');
const titleSk = document.getElementById('title_skills');
const infoSk = document.getElementById('info_skills');
const titleTg = document.getElementById('title_technology');
const infoTg = document.getElementById('info_technology');
const logoTech = document.getElementById('logo');



function createTitleMain(tagName, clName, clName2, text) {
    let firstH = document.createElement(tagName);
    firstH.classList.add(clName, clName2);
    firstH.innerHTML = text;
    heaD.append(firstH);
};

function createTitleSkills(tagName, clName, clName2, text) {
    let firstH = document.createElement(tagName);
    firstH.classList.add(clName, clName2);
    firstH.innerHTML = text;
    titleSk.append(firstH);
};

function createTitleTechnology(tagName, clName, clName2, text) {
    let firstH = document.createElement(tagName);
    firstH.classList.add(clName, clName2);
    firstH.innerHTML = text;
    titleTg.append(firstH);
};


function createImg(tagName, atrib, value) {
    let firstImg = document.createElement(tagName);
    firstImg.classList.add('animation_fadeInRight');
    firstImg.setAttribute(atrib, value)
    heaD.append(firstImg);
    return firstImg;
};

function createInfoSkills(tagName, clName, text) {
    let secondP = document.createElement(tagName);
    secondP.classList.add(clName, 'style_text');
    secondP.innerHTML = text;
    infoSk.append(secondP);
};

function createInfoTechnology(tagName, clName, text) {
    let secondP = document.createElement(tagName);
    secondP.classList.add(clName, 'style_text');
    secondP.innerHTML = text;
    infoTg.append(secondP);
};




(function foo() {
    setTimeout(() => {
        createTitleMain('h1','title', 'animation_backInLeft', 'YOUR'); 
    }, 1);
    setTimeout(() => {
        createTitleMain('h1','title', 'animation_backInRight', 'FRONT-END'); 
    }, 500);
    setTimeout(() => {
        createTitleMain('h1','title', 'animation_backInLeft', 'DEVELOPER'); 
    }, 1000);
    setTimeout(() => {
        createTitleMain('p', 'text_style', 'animation_backInUp', 'My name is Nikolay Moroka');
        createTitleMain('p', 'text_style', 'animation_backInUp', 'I will create the best website for your buisness');
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
                setTimeout(() => {
                    createTitleSkills('h1','title', 'animation_fadeInLeft', 'MY'); 
                }, 1);
                setTimeout(() => {
                    createTitleSkills('h1','title', 'animation_fadeInLeft', 'SKILLS'); 
                }, 500);
                setTimeout(() => {
                    createInfoSkills('li', 'animation_fadeInRight', 'HTML5 / CSS3'); 
                }, 600);
                setTimeout(() => {
                    createInfoSkills('li', 'animation_fadeInRight', 'SASS / SCSS preprocessors'); 
                }, 800);
                setTimeout(() => {
                    createInfoSkills('li', 'animation_fadeInRight', 'JavaScript (ES6/6+)'); 
                }, 1000);
                setTimeout(() => {
                    createInfoSkills('li', 'animation_fadeInRight', 'jQuery'); 
                }, 1200);
                setTimeout(() => {
                    createInfoSkills('li', 'animation_fadeInRight', 'Vue.js'); 
                }, 1400);

                     
            flag = 1;
        }
       
    }
}



