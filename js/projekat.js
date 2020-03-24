let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');
let newImage = document.querySelector('#slider-img');
let newH1 = document.querySelector('#slider-h1');
let newParagraph = document.querySelector('#slider-p')
let newUrl = document.querySelector('#slider-anchor');

// var slider = [
// {
//     image: 'images/slider-image1.jpg',
//     title: 'Start your journey with our practical courses',
//     description: 'Our online courses are build in partnership with technology leaders and are designed to meet industry demands',
//     url: ''
   
// },

// {
//     image: 'images/slider-image2.jpg',
//     title: 'Start your journey with our practical courses 1',
//     description: ' Our online courses are build in partnership with technology leaders and are designed to meet industry demands 1 ',
//     url: 'https://www.b92.net/'
   
// },

// {
//     image: 'images/slider-image3.jpg',
//     title: 'Start your journey with our practical courses 2',
//     description: ' Our online courses are build in partnership with technology leaders and are designed to meet industry demands 2 ',
//     url: 'https://www.blic.rs/'
   
// }


// ];


let request = new Request('http://pushadmin.dropmind.com/api/slider', {method: 'GET'});

fetch(request)
.then(function(response){
    if (response.ok){
        return response.json();
    }else {
        throw 'response nije u redu'
    }
})
.then(function(slider){
    console.log(slider);
    sliderLogic(slider);
})
.catch(function(greska){
    console.log('Greska', greska);

})

function sliderLogic(slider){
let counter = 0 ;

function changeSlider (number){
   
    newImage.src = slider[counter].imageurl;
   newH1.textContent = slider[counter].title;
   newParagraph.textContent = slider[counter].description;
   newUrl.href = slider[counter].url;
  
}



leftArrow.addEventListener('click', function (){ 

    if (counter === 0){
        counter = slider.length - 1;
    }else {
        counter = counter - 1;
    }
    console.log(counter);
    changeSlider(counter);

});

rightArrow.addEventListener('click', function (){
    
    if (counter === slider.length - 1){
        counter = 0;
    }else {
        counter = counter + 1;
    }
    console.log(counter);
    changeSlider(counter);
   
});
}