// var slider1 = [{
//         image: "courses-image2.jpg"
//     },
//     {
//         image: "courses-image1.jpg"
//     },
//     {
//         image: "courses-image3.jpg"
//     }
// ];
//let currentIndex = 0;

// function slideChange(index) {
//     currentIndex = currentIndex + index;

//     if (currentIndex > slider.length - 1) {
//         currentIndex = 0;
//     } else if (currentIndex < 0) {
//         currentIndex = slider.length - 1;
//     }

//     sliderImage.src = slider[currentIndex].image;
//     sliderHeading.textContent = slider[currentIndex].h1;

//     console.log(currentIndex);
//     //sliderImage.src = src
// }
// let sliderHeading = document.getElementById("slider-heading");
// let sliderImage = document.getElementById("slider-img");
// let rightArrow = document.getElementById('right-arrow');
// let leftArrow = document.getElementById('left-arrow');
// leftArrow.addEventListener('click', function() {
//     slideChange(-1);
// });

// rightArrow.addEventListener('click', function() {
//     slideChange(+1);
// })