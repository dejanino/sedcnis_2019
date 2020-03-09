// let slider = [{
//     image: "images/slider-image1.jpg",
//     title: "Start your journey with our practical courses AAAA",
//     description: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
//     url: ""
// },
// {
//     image: "images/slider-image2.jpg",
//     title: "Start your journey with our practical courses 2 ",
//     description: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
//     url: ""
// },
// {
//     image: "images/slider-image3.jpg",
//     title: "Start your journey with our practical courses 3",
//     description: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
//     url: ""
// }];
let request1 = new Request('http://pushadmin.dropmind.com/api/slider', {method: 'GET'});

fetch(request1)
.then(function(response){
	if (response.ok) {
		return response.json();
	}
	else {
		throw 'Response nije ok';
	}
})
.then(function(response){
    console.log(response);
    sliderLogic(response);
})
.catch(function(greska){
	console.log('Greska!', greska);
});

function sliderLogic(slider){
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

    sliderPhoto.src = slider[currentIndex].imageurl;
    heading.innerHTML = slider[currentIndex].title;
    paragraph.innerHTML = slider[currentIndex].description;
    url.href = slider[currentIndex].url;
    url.innerHTML = "hocu da pise nesto drugo";

    console.log(currentIndex);
}

changeSlide(0);

prev.addEventListener("click", function(){
    changeSlide(-1);
 });
next.addEventListener("click", function(){ 
    changeSlide(+1);
});

}






