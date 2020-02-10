function main() {
    
    let right = document.getElementById('right');
    let left = document.getElementById('left');
    let image = document.getElementById('image');
    let heading = document.querySelector('h1');
    let para = document.getElementById('para');
    let btnUrl = document.getElementById('btnUrl');

    let slider = [
        {  
            title: 'Start your journey with our practical courses',
            description: 'Our online courses are build in partnership with technology leaders and are designed to meet industry demands',
            buttonUrl: 'https://www.google.com/',
            imgSrc: 'images/slider-image1.jpg',
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            description: 'Vitae optio veritatis fugiat deserunt odio obcaecati? Non debitis explicabo tenetur.',
            buttonUrl: 'https://www.wikipedia.org/',
            imgSrc: 'images/slider-image2.jpg',
        },
        {
            title: 'Velit similique eum nam consequatur quasi provident',
            description: 'Repellat sapiente suscipit facilis, animi debitis neque consectetur ut officiis nisi, corporis atque dicta.',
            buttonUrl: 'https://www.youtube.com/',
            imgSrc: 'images/slider-image3.jpg',
        }
    ];

    function changeAll() {
        image.setAttribute('src', slider[counter].imgSrc);
        heading.textContent = slider[counter].title;
        para.textContent = slider[counter].description;
        btnUrl.setAttribute('href', slider[counter].buttonUrl);
    }

    let counter = 0;

    right.addEventListener('click', function () {       
        if (counter === slider.length - 1) {
            counter = 0;
        } else {
            counter++
        }
        changeAll();
    });

    left.addEventListener('click', function () {
        if (counter === 0) { 
            counter = slider.length - 1;
        } else {
            counter--;
        }
        changeAll();
    });

    
};

main();