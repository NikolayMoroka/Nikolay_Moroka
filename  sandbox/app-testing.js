const first = document.getElementById('first');

function createInfoSkills(tagName, id, text) {
    let secondP = document.createElement(tagName);
    secondP.classList.add('style_text');
    secondP.id = (id);
    secondP.innerHTML = text;
    first.append(secondP);
};

function createImg(tagName, atrib, value) {
    const img = document.getElementById('img')
    let firstImg = document.createElement(tagName);
    firstImg.id = genIDge();
    firstImg.setAttribute(atrib, value)
    img.append(firstImg);
}

window.onscroll = scroller;
let flag = 0;

function scroller() {
        if(flag == 0) {
            if(window.pageYOffset > 10) {
                setTimeout(() => {
                    createInfoSkills('p', 'html', 'HTML')
                }, 1);
                setTimeout(() => {
                    createInfoSkills('p', 'css', 'CSS')
                }, 200);
                setTimeout(() => {
                    createInfoSkills('p', 'js', 'JavaScript')
                }, 400);    
            flag = 1;
        }
    }
}

document.getElementById('first').addEventListener('mouseover', function(e){
    if(e.target.id == 'first') {
        return
    } else if(e.target.id == 'html') {
        createImg('img', 'src', '../img/html.png');
        createImg('img', 'src', '../img/bootstrap.png');
    } else if(e.target.id == 'css') {
        createImg('img', 'src', '../img/css.png');
        createImg('img', 'src', '../img/sass.png');
    } else if(e.target.id == 'js') {
        createImg('img', 'src', '../img/js.png');
        createImg('img', 'src', '../img/jquery.png');
        createImg('img', 'src', '../img/vue.png');
    } else {
        return
    }
    });

const img = document.getElementById('first');
img.addEventListener('mouseout', function(e){ 
if(e.target.id == 'first') {
        return
    } else if(e.target.id !== 'html', 'css', 'js') {
    const img = document.getElementById('img');
    while (img.firstChild) {
    img.removeChild(img.firstChild);
}
    }
});

function genIDge(value) {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}


