const aboutMS = document.getElementById('about_me-s');






let createDiv = document.createElement('div');
aboutMS.append(createDiv);

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
createDiv.append(
    createP('p', 'style_text_in_p', 'HTML / CSS'),
    createImg('img', 'src', 'img/html.png'),
    createImg('img', 'src', 'img/css.png')
    );




