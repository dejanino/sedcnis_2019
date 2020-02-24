var slider = [{
    image: "images/slider-image1.jpg",
    title: "Distance Learning Education Center",
    description: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
    url: "Discover more"
},
{
    image: "images/slider-image2.jpg",
    title: "Start your journey with our practical courses",
    description: "Our online courses are desinged ti fit in your industry supporting all-round with latest technologies.",
    url: "Take a cours"
},
{
    image: "images/slider-image3.jpg",
    title: "Efficient learning methods",
    description: "Nam eget sapien vel nibh euismod vulputate in vel nibh.",
    url: "Let\'s chat"
}];

let currentIndex = 0;
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let sliderPhoto = document.getElementById("slider-photo");
//find h1 element
let heading = document.getElementById("heading-text");
//find paragraph element
let paragraph = document.getElementById("description-text");
//find anchor
let url = document.getElementById("slider-url");

function changeSlide(index){
    currentIndex = currentIndex + index;

    if (currentIndex > slider.length -1){
        currentIndex = 0;
    }

    else if (currentIndex < 0){
        currentIndex = slider.length - 1;
    }

    sliderPhoto.src = slider[currentIndex].image;
    heading.innerHTML = slider[currentIndex].title;
    paragraph.innerHTML = slider[currentIndex].description;
    url.href = slider[currentIndex].url;

    console.log(currentIndex);
}

changeSlide(0);

prev.addEventListener("click", function(){
    changeSlide(-1);
 });
next.addEventListener("click", function(){ 
    changeSlide(+1);
});

var course = [{
    courses_image:'images/courses-image1.jpg',
    courses_title:'Social Media Manager'
},
{
    courses_image:'images/courses-image2.jpg',
    courses_title:'Graphic & Web Design'
},
{
    courses_image:'images/courses-image3.jpg',
    courses_title:'Marketing Communication'
},
{
    courses_image:'images/courses-image4.jpg',
    courses_title:'Summer Kids'
},
{
    courses_image:'images/courses-image5.jpg',
    courses_title:'Business & Management'
}];

console.log(course.length); // 5 tolko i treba

var indexi = [0, 1, 2];

let courselevo = document.getElementById('courselevo');
let coursedesno = document.getElementById('coursedesno');

let nizslika = document.getElementsByClassName('coursejpg');
console.log(nizslika);

let dodeljivanjeslika = function(i){
    nizslika[i].src = course[indexi[i]].courses_image;
};

function pomeraj(pomeraj){
    for (let i = 0; i < indexi.length; i++){
        indexi[i] = indexi[i] + pomeraj;
        if (indexi[i] < 0){
            indexi[i] = course.length;
        } 
        else if (indexi[i] >= course.length){
            indexi[i] = 0;
        };
        dodeljivanjeslika(i)
    }
};

courselevo.addEventListener("click", function(){
    pomeraj(-1);
});

coursedesno.addEventListener("click", function(){
    pomeraj(1);
});

/*
//document.getElementsByClassName
console.log(course.length) // 5 

let nizIndexi = [];

function naravi_niz_indeksa(duzinaObjekta){
    for(let i=0; i<course.length; i++){
        nizIndexi = nizIndexi + i;
    }
};
naravi_niz_indeksa(course.length);
console.log(nizIndexi);
*/

