function createAnim() {
    const width = document.documentElement.clientWidth;
    if( width < 576 ) {
        const title = document.getElementsByClassName('h2');
        for (let i = 0; i < title.length; i++) {
            let element1 = title[i];
            element1.dataset.aos = '';
        };
        const info = document.getElementsByClassName('info');
        for (let i = 0; i < info.length; i++) {
            let element2 = info[i];
            element2.dataset.aos = '';
        };
        const img = document.getElementsByClassName('img');
        for (let i = 0; i < img.length; i++) {
            let element3 = img[i];
            element3.dataset.aos = '';
        };
    } else {
        console.log('all right')
    };
};


createAnim();