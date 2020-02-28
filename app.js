var slider = [
  {
    image: "images/slider-image1.jpg",
    title: "Start your journey with our practical courses",
    description: "Our online courses are build in partnership with technology leaders and are designed to meet  industry demands",
    url: "#contact"
  },
  {
    image: "images/slider-image2.jpg",
    title: "Start your journey with our practical courses 2",
    description: "Our online courses are build in partnership with technology leaders and are designed to meet  industry demands 2",
    url: "#footer"
  },
  {
    image: "images/slider-image3.jpg",
    title: "Start your journey with our practical courses 3",
    description: "Our online courses are build in partnership with technology leaders and are designed to meet  industry demands 3",
    url: "#student-container"
  }
];

var currentIndex = 0;



var leftButton = document.getElementById("back");
var rightButton = document.getElementById("next");
var sliderImage = document.getElementById("slider-img");
var sliderTitle = document.getElementById("title");
//izgubio sam dizajn za h1 posle ovoga
var sliderParagraf = document.querySelector(".slider-paragraf");
var sliderBigButton = document.querySelector(".big-button");

function changeSlide(newIndex) {


  console.log(currentIndex);

  currentIndex = currentIndex + newIndex;

  /*
  if (currentIndex > slider.length - 1) {
    currentIndex = 0;
  }
  else if (currentIndex < 0) {
    currentIndex = slider.length - 1;
  }
*/
  if (currentIndex > 2) { currentIndex = 0 };
  if (currentIndex < 0) { currentIndex = 2 };
  /*
  if (currentIndex <= -1) { return currentIndex = 3 };
  if (currentIndex >= 3) { return currentIndex = -1 };
  */

  sliderImage.src = slider[currentIndex].image;
  sliderTitle.innerHTML = slider[currentIndex].title;
  sliderParagraf.innerHTML = slider[currentIndex].description;
  sliderBigButton.href = slider[currentIndex].url;
}



leftButton.addEventListener("click", function () {
  changeSlide(-1);
});
rightButton.addEventListener("click", function () {
  changeSlide(+1);
});

window / addEventListener("resize", function () {
  //check window width
})
