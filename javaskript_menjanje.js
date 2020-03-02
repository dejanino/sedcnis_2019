var slider = [{
        image: "images/slider-image1.jpg",
        h1: "Efficient Learning Methods",
        p: "prvi opis za slider prvi opis za slider prvi opis za slider prvi opis za slider prvi opis za slider prvi opis za slider ",
        url: "#contact-container",
        anchorText: 'Let\'s chat!'
    },
    {
        image: "images/slider-image2.jpg",
        h1: "Which courses are suitable for you",
        p: "222222222",
        url: "#courses-container",
        anchorText: 'Tralala'
    },
    {
        image: "images/slider-image3.jpg",
        h1: "What do students say about us",
        p: "333333333333",
        url: "#student-container",
        anchorText: 'Let\'s chat!'
    }
];
let currentIndex = 0;
let sliderHeading = document.getElementById('slider-heading');
let sliderImage = document.getElementById('slider-img')
let sliderDescription = document.getElementById('slider-description');
let sliderButton = document.getElementById('slider-button');
let rightArrow = document.getElementById('right-arrow');
let leftArrow = document.getElementById('left-arrow');





let applyData = function() {
    sliderImage.src = slider[currentIndex].image;
    sliderHeading.textContent = slider[currentIndex].h1;
    sliderDescription.textContent = slider[currentIndex].p;
    sliderButton.setAttribute('href', slider[currentIndex].url);
    sliderButton.textContent = slider[currentIndex].anchorText;
}

function slideChange(index) {
    currentIndex = currentIndex + index;

    if (currentIndex > slider.length - 1) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slider.length - 1;
    }

    applyData();
    console.log(currentIndex);
    //sliderImage.src = src
}
slideChange(0);

leftArrow.addEventListener('click', function() {
    slideChange(-1);
});

rightArrow.addEventListener('click', function() {
    slideChange(+1);
})




var popularCourses = [{
        image: "images/courses-image2.jpg",
        h1: "Efficient Learning Methods",
        p: "prvi opis za slider prvi opis za slider prvi opis za slider prvi opis za slider prvi opis za slider prvi opis za slider ",
        url: "#contact-container",
        anchorText: 'Let\'s chat!'
    },
    {
        image: "images/courses-image1.jpg",
        h1: "ope da si se promenila",
        p: "222222222",
        url: "#courses-container",
        anchorText: 'Tralala'
    },
    {
        image: "images/courses-image3.jpg",
        h1: "ovo je zadnji put da sam se promenila, da znas",
        p: "333333333333",
        url: "#student-container",
        anchorText: 'Let\'s chat!'
    }
];
let counters = [0, 1, 2];

function changeCourses(index, containerIndex) {
    counters[containerIndex] = counters[containerIndex] + index;

    if (counters[containerIndex] > popularCourses.length - 1) {
        counters[containerIndex] = 0;
    } else if (counters[containerIndex] < 0) {
        counters[containerIndex] = popularCourses.length - 1;
    }

    // applyData2(containerIndex);

}

let right = document.getElementById('right');
let left = document.getElementById('left');

right.addEventListener('click', function() {
    for (let i = 0; i < counters.length; i++) {
        changeCourses(-1, i);
    }
    console.log(counters);

});

left.addEventListener('click', function() {
    for (let i = 0; i < counters.length; i++) {
        changeCourses(+1, i);
    }
    console.log(counters);

});