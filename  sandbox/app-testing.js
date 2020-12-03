const first = document.getElementById('first');

function createInfoSkills(tagName, clName, id, text) {
    let secondP = document.createElement(tagName);
    secondP.classList.add(clName, 'style_text');
    secondP.id = (id);
    secondP.innerHTML = text;
    first.append(secondP);
};

window.onscroll = scroller;
let flag = 0;

function scroller() {
        if(flag == 0) {
            if(window.pageYOffset > 10) {
                setTimeout(() => {
                    const html = document.getElementById('html');
                        let secondP = document.createElement('p');
                        secondP.classList.add('style_text');
                        secondP.innerHTML = 'HTML';
                        html.append(secondP);
                }, 1);
                setTimeout(() => {
                    const css = document.getElementById('css');
                    let secondP = document.createElement('p');
                        secondP.classList.add('style_text');
                        secondP.innerHTML = 'CSS';
                        css.append(secondP);
                }, 1);
                setTimeout(() => {
                    const js = document.getElementById('js');
                    let secondP = document.createElement('p');
                        secondP.classList.add('style_text');
                        secondP.innerHTML = 'JavaScript';
                        js.append(secondP);
                }, 1);
               

                     
            flag = 1;
        }
       
    }
}

const img = document.getElementById('img')

const htmlTg = document.getElementById('html');
htmlTg.addEventListener('mouseover', e => {
    
    let firstImg = document.createElement('img');
    firstImg.classList.add('animation_fadeInRight', 'img');
    firstImg.setAttribute('src', '../img/html.png')
    img.append(firstImg);
})

const imgDel = document.getElementsByClassName('img');
imgDel.addEventListener('mouseout', e => {
    imgDel.remove();
})


