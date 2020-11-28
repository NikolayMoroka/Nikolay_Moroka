const id1 = document.getElementById('id1');
const id2 = document.getElementById('id2');
const id3 = document.getElementById('id3');
const id4 = document.getElementById('id4');
const id5 = document.getElementById('id5');

function createH(clName, text) {
    id1.className = clName;
    id1.innerHTML = text;
};

// function createNikM(clName, text) {
//     let firstH = document.createElement(tagName);
//     firstH.className = clName;
//     firstH.innerHTML = text;
//     firText.append(firstH);
// };

// function createNikM(clName, text) {
//     let firstH = document.createElement(tagName);
//     firstH.className = clName;
//     firstH.innerHTML = text;
//     secText.append(firstH);
// };

(function foo() {
    setTimeout(() => {
        createH('title1', 'YOUR'); 
    }, 500);
    setTimeout(() => {
        createH('title2', 'FRONT-END'); 
    }, 1000);
    // setTimeout(() => {
    //     createH('h1','title3', 'DEVELOPER'); 
    // }, 1500);
    // setTimeout(() => {
    //     createH('p','typing-text', 'Hello, my name is Nikolay Moroka.'); 
    // }, 5000);
    // setTimeout(() => {
    //     createH('p','typing-text', 'And I will create the best website for your buisness!'); 
    // }, 9000);
})();