function main() {
    
    let right = document.getElementById('right');
    let left = document.getElementById('left');
    let image = document.getElementById('image');
    let heading = document.querySelector('h1');
    let para = document.getElementById('para');
    let btnUrl = document.getElementById('btnUrl');

    let bgcImage = document.querySelector('.wrapper');

    let dotOne = document.querySelector('.dot-one');
    let dotTwo = document.querySelector('.dot-two');
    let dotThree = document.querySelector('.dot-three');

     
    let slider = [
        {  
            title: 'Start your journey with our practical courses',
            description: 'Our online courses are build in partnership with technology leaders and are designed to meet industry demands',
            buttonUrl: 'https://www.google.com/',
            imgSrc: 'images/slider-image1.jpg',
            dot: document.querySelector('.dot-one')
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            description: 'Vitae optio veritatis fugiat deserunt odio obcaecati? Non debitis explicabo tenetur.',
            buttonUrl: 'https://www.wikipedia.org/',
            imgSrc: 'images/slider-image2.jpg',
            dot: document.querySelector('.dot-two')
        },
        {
            title: 'Velit similique eum nam consequatur quasi provident',
            description: 'Repellat sapiente suscipit facilis, animi debitis neque consectetur ut officiis nisi, corporis atque dicta.',
            buttonUrl: 'https://www.youtube.com/',
            imgSrc: 'images/slider-image3.jpg',
            dot: document.querySelector('.dot-three')
        }
    ];

    function changeAll() {
        // image.setAttribute('src', slider[counter].imgSrc);
        bgcImage.style.backgroundImage = `linear-gradient(#0000005b, #0000003b),url(${slider[counter].imgSrc})`;
        bgcImage.classList.add('bgc-position');
        heading.textContent = slider[counter].title;
        para.textContent = slider[counter].description;
        btnUrl.setAttribute('href', slider[counter].buttonUrl);
    }

    function changeDot(x=0) {
        slider[counter-x].dot.classList.toggle('active-dot');
    }

    let counter = 0;

    right.addEventListener('click', function () {       
        if (counter === slider.length - 1) {
            changeDot()
            counter = 0;
            changeDot()
        } else {
            counter++
            console.log(counter);
            changeDot();
            changeDot(1);
        }
        // changeDot();
        console.log(slider[counter].dot);
        // slider[counter].dot.classList.toggle('active-dot');

        setTimeout(changeAll, 200);
    });

    left.addEventListener('click', function () {
        if (counter === 0) { 
            changeDot();
            counter = slider.length - 1;
            changeDot();
        } else {
            changeDot();
            counter--;
            changeDot();
        }
        setTimeout(changeAll, 200);
    });
    

    slider[0].dot.addEventListener('click', function () {
        changeDot();
        counter = 0;
        changeDot();
        changeAll();
    });
    slider[1].dot.addEventListener('click', function () {
        changeDot();
        counter = 1;
        changeDot();
        changeAll();
    });
    slider[2].dot.addEventListener('click', function () {
        changeDot();
        counter = 2;
        changeDot();
        changeAll();
    });
    /* document.addEventListener('click', function () {
        console.log('radi');

        setInterval(function () {
            console.log(counter);
            console.log(counter);
        if (counter === slider.length - 1) {
            changeDot();
            counter = 0;
            changeDot();
            changeAll();
        } else {
            counter++
            console.log(counter);
            changeDot();
            changeDot(1);
            changeAll();
        }
        }, 2000);
    }); */
};

main();