const heaD = document.getElementById('main_picture');
const aboutMeF = document.getElementById('about_me-f');
const aboutMeS = document.getElementById('about_me-s');
const titleSk = document.getElementById('title_skills');
const infoSk = document.getElementById('info_skills');
const titleTg = document.getElementById('title_technology');
const infoTg = document.getElementById('info_technology');
const logoTech = document.getElementById('logo');
const infoTech = document.getElementById('info_tech');
const img = document.getElementById('img')



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
    firstImg.classList.add('img_in', 'flip');
    firstImg.id = genIDge();
    firstImg.setAttribute(atrib, value)
    img.append(firstImg);
}

function createInfoSkills(tagName, id, text) {
    let secondP = document.createElement(tagName);
    secondP.classList.add('style_text', 'animation_fadeInRight');
    secondP.id = (id);
    secondP.innerHTML = text;
    infoSk.append(secondP);
};

function createInfoTechnology(tagName, clName, text) {
    let secondP = document.createElement(tagName);
    secondP.classList.add(clName, 'style_text');
    secondP.innerHTML = text;
    infoTg.append(secondP);
};

function createInfoTech(tagName, text) {
    let secondP = document.createElement(tagName);
    secondP.classList.add('text_style_in_techInfo', 'animation_fadeInRight');
    secondP.innerHTML = text;
    infoTech.append(secondP);
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
                    createTitleSkills('h1','style_title_skills', 'animation_fadeInLeft', 'MY SKILLS'); 
                }, 1);
               
                setTimeout(() => {
                    createInfoSkills('h3', 'html', 'HTML'); 
                }, 600);
                setTimeout(() => {
                    createInfoSkills('h3', 'css', 'CSS'); 
                }, 800);
                setTimeout(() => {
                    createInfoSkills('h3', 'js', 'JavaScript'); 
                }, 1000);
                setTimeout(() => {
                    createInfoSkills('h3', 'other', 'And other'); 
                }, 1200);

            flag = 1;
        }
       
    }
}






infoSk.addEventListener('mouseover', function(e){
    if(e.target.id == 'first') {
        return
    } else if(e.target.id == 'html') {
        createImg('img', 'src', 'img/html.png');
        createImg('img', 'src', 'img/bootstrap.png');
        createInfoTech('li', 'HTML5');
        createInfoTech('li', 'Bootstrap');
        createInfoTech('li', 'Adaptive / cross-browser / valide laoyt');
    } else if(e.target.id == 'css') {
        createImg('img', 'src', 'img/css.png');
        createImg('img', 'src', 'img/sass.png');
        createInfoTech('li', 'CSS3');
        createInfoTech('li', 'SASS / SCSS preproccesors');
        createInfoTech('li', 'CSS Grid');
        createInfoTech('li', 'CSS Animation');
    } else if(e.target.id == 'js') {
        createImg('img', 'src', 'img/js.png');
        createImg('img', 'src', 'img/jquery.png');
        createImg('img', 'src', 'img/vue.png');
        createInfoTech('li', 'JavaScript (ES6/ES6+)');
        createInfoTech('li', 'jQuery');
        createInfoTech('li', 'Vue.js');
    } else if(e.target.id == 'other') {
        createImg('img', 'src', 'img/git.png');
        createImg('img', 'src', 'img/gulp.png');
        createImg('img', 'src', 'img/figma.png');
        createImg('img', 'src', 'img/photoshop.png');
        createImg('img', 'src', 'img/wordpress.png');
        createInfoTech('li', 'Git');
        createInfoTech('li', 'Gulp');
        createInfoTech('li', 'Figma');
        createInfoTech('li', 'PhotoShop');
        createInfoTech('li', 'WordPress');
    } else {
        return
    }
    });


infoSk.addEventListener('mouseout', function(e){ 
    if(e.target.id == 'first') {
        return
        } else if(e.target.id !== 'html', 'css', 'js') {
        while (img.firstChild) {
        img.removeChild(img.firstChild);
        }
        while (infoTech.firstChild) {
            infoTech.removeChild(infoTech.firstChild);
        }
    } else {
        return
    }
});

function genIDge(value) {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}



