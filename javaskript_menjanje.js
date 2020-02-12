var slider = [{
        image: "images/slider-image1.jpg",
        h1: "Efficient Learning Methods",
        p: "",
        url: ""
    },
    {
        image: "images/slider-image2.jpg",
        h1: "ope da si se promenila",
        p: "222222222",
        url: ""
    },
    {
        image: "images/slider-image3.jpg",
        h1: "ovo je zadnji pit da sam se promenila, da znas",
        p: "333333333333",
        url: ""
    }
];
let currentIndex = 0;

function slideChange(index) {
    currentIndex = currentIndex + index;

    if (currentIndex > slider.length - 1) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slider.length - 1;
    }

    sliderImage.src = slider[currentIndex].image
    sliderHeading.textContent = slider[currentIndex].h1

    console.log(currentIndex);
    //sliderImage.src = src
}
let sliderHeading = document.getElementById("slider-heading");
let sliderImage = document.getElementById("slider-img");
let rightArrow = document.getElementById('right-arrow');
let leftArrow = document.getElementById('left-arrow');
leftArrow.addEventListener('click', function() {
    slideChange(-1);
});

rightArrow.addEventListener('click', function() {
    slideChange(+1);
})