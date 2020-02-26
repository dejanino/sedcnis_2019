function main () {

    
    var coursesSlider = [
        {
            image: 'images/courses-image1.jpg' ,
            title: 'Bussines & Management',
            description : 'Lorem',
            avatarImage : 'images/author-image1.jpg',
            name: 'Mark'
        },
        
        {
            image: 'images/courses-image2.jpg' ,
            title: 'Bussines & Bussines',
            description : 'Borem',
            avatarImage : 'images/author-image2.jpg',
            name: 'Jesica'
        },
        
        {
            image: 'images/courses-image3.jpg' ,
            title: 'Management & Bussines',
            description : 'Smorem',
            avatarImage : 'images/author-image3.jpg',
            name: 'Nicole'
        },

        {
            image: 'images/courses-image4.jpg' ,
            title: 'Management & Management',
            description : 'Vlorem',
            avatarImage : 'images/author-image4.jpg',
            name: 'Daniel'
        },

        { 
             image: 'images/courses-image5.jpg' ,
             title: 'Management ',
             description : 'Glorem',
             avatarImage : 'images/tst-image1.jpg',
             name: 'John'
    
        }

    ]

    let isMobile = false;
    let counter = 0;
    let counter1 = 0;
    let previous = document.querySelector('#previous-arrow');
    let next  = document.querySelector('#next-arrow');

    let mobilePicture = document.querySelector('#mobile-image');
    let mobileText = document.querySelector('#mobile-courses-text');
    let mobileDescription = document.querySelector('#mobile-courses-description');
    let avatarPicture = document.querySelector('#avatar-image');
    let avatarName = document.querySelector('#avatar-name');
    
    let coursesImage = document.getElementsByClassName('course-image');
    let coursesText = document.getElementsByClassName('course-title');
    let coursesDescription = document.getElementsByClassName('courses-description');
    let coursesAvatar = document.getElementsByClassName('image-avatar');
    let nameAvatar = document.getElementsByClassName('avatar-name');
    // let titleImage = document.getElementsByClassName('mobile-courses-text');
    console.log(coursesText);
    console.log(coursesImage);
    console.log(coursesDescription);
    console.log(coursesAvatar);
    console.log(nameAvatar);


let checkSize = function (){
    if (window.innerWidth > 992 ){
        isMobile = false;
        console.log(isMobile);
        
    }else {
        isMobile = true;
        console.log(isMobile);
    }
}

window.addEventListener("resize", checkSize);

previous.addEventListener('click', function(){
    // console.log('nazad');
    

    if(isMobile){
    
        if (counter === 0){
            counter = coursesSlider.length - 1;
            console.log(counter);
        }else {
            counter --;
            console.log(counter);
        }
        mobileChanger();

    }else {     

        if (counter1 === 0){
            counter1 = coursesSlider.length - 1;
            console.log(counter1);
        }else {
            counter1 --;
            console.log(counter1);
        }
        
        changePicture(coursesImage,counter1);
        changeText(coursesText,counter1);
        changeTextDescription(coursesDescription,counter1);
        changePictureAvatar(coursesAvatar,counter1);
        changeNameAvarat(nameAvatar,counter1);
        // changeSlider(counter1);
        //  changeTitle(counter1);
    }

});

next.addEventListener('click',function(){
   // console.log('napred');

   if(isMobile){
       
       if (counter === coursesSlider.length - 1 ){
           counter = 0 ;
           console.log(counter);
        }else {
            counter ++;
            console.log(counter);
        }
        
        mobileChanger();

    }else {
        if (counter1 === coursesSlider.length - 1){
            counter1 = 0;

            console.log(counter1);
        }else {
            counter1 ++;
            console.log(counter1);
        }
        
         changePicture(coursesImage,counter1);
         changeText(coursesText,counter1);
         changeTextDescription(coursesDescription,counter1);
         changePictureAvatar(coursesAvatar,counter1);
         changeNameAvarat(nameAvatar,counter1);
          //  changeSlider(counter1);
        //  changeTitle(counter1);
    }

});

function mobileChanger (){

    mobilePicture.src = coursesSlider[counter].image;
    mobileText.textContent = coursesSlider[counter].title;
    mobileDescription.textContent = coursesSlider[counter].description;
    avatarPicture.src = coursesSlider[counter].avatarImage;
    avatarName.textContent = coursesSlider[counter].name;
}


function changePicture (image, counter){
    
     image[0].src = coursesSlider[counter1].image;

    if (counter1 === coursesSlider.length - 2){
        image[1].src = coursesSlider[1 + counter1].image;
        image[2].src = coursesSlider[0].image;

    }else if (counter1 === coursesSlider.length - 1){
        image[1].src = coursesSlider[0].image;
        image[2].src = coursesSlider[1].image

    }else {
      //  image[0].src = coursesSlider[0 + counter1].image;
        image[1].src = coursesSlider[1 + counter1].image;
        image[2].src = coursesSlider[2 + counter1].image;
    }
}

function changeText (text, counter){
    
    text[0].textContent = coursesSlider[0 + counter].title;

    if (counter === coursesSlider.length - 2){
        text[1].textContent = coursesSlider[1 + counter].title;
        text[2].textContent = coursesSlider[0].title;

    }else if (counter === coursesSlider.length - 1){
        text[1].textContent = coursesSlider[0].title;
        text[2].textContent = coursesSlider[1].title;

    }else {
       // text[0].textContent = coursesSlider[0 + counter].title;
        text[1].textContent = coursesSlider[1 + counter].title;
        text[2].textContent = coursesSlider[2 + counter].title;
    }

}


function changeTextDescription (text, counter){
    
     text[0].textContent = coursesSlider[0 + counter].title;
 
     if (counter === coursesSlider.length - 2){
         text[1].textContent = coursesSlider[1 + counter].description;
         text[2].textContent = coursesSlider[0].description;
 
     }else if (counter === coursesSlider.length - 1){
         text[1].textContent = coursesSlider[0].description;
         text[2].textContent = coursesSlider[1].description;
 
     }else {
       //  text[0].textContent = coursesSlider[0 + counter].description;
         text[1].textContent = coursesSlider[1 + counter].description;
         text[2].textContent = coursesSlider[2 + counter].description;
     }
 
 }

function changePictureAvatar (image, counter1){

    image[0].src = coursesSlider[0 + counter1].avatarImage;

    if (counter1 === coursesSlider.length - 2){
        image[1].src = coursesSlider[1 + counter1].avatarImage;
        image[2].src = coursesSlider[0].avatarImage;

    }else if (counter1 === coursesSlider.length - 1){
        image[1].src = coursesSlider[0].avatarImage;
        image[2].src = coursesSlider[1].avatarImage;

    }else {
      //  image[0].src = coursesSlider[0 + counter1].avatarImage;
        image[1].src = coursesSlider[1 + counter1].avatarImage;
        image[2].src = coursesSlider[2 + counter1].avatarImage;
    }
}

function changeNameAvarat (text, counter){
    
     text[0].textContent = coursesSlider[0 + counter].name;
 
     if (counter === coursesSlider.length - 2){
         text[1].textContent = coursesSlider[1 + counter].name;
         text[2].textContent = coursesSlider[0].name;
 
     }else if (counter === coursesSlider.length - 1){
         text[1].textContent = coursesSlider[0].name;
         text[2].textContent = coursesSlider[1].name;
 
     }else {
        //  text[0].textContent = coursesSlider[0 + counter].name;
         text[1].textContent = coursesSlider[1 + counter].name;
         text[2].textContent = coursesSlider[2 + counter].name;
     }
 
 }

// function changeSlider (counter){

//     coursesImage[0].src = coursesSlider[0 + counter1].image;

//         if (counter1 === coursesSlider.length - 2){
//             coursesImage[1].src = coursesSlider[1 + counter1].image;
//             coursesImage[2].src = coursesSlider[0].image;

//         }else if (counter1 === coursesSlider.length - 1){
//             coursesImage[1].src = coursesSlider[0].image;
//             coursesImage[2].src = coursesSlider[1].image

//         }else {
//             coursesImage[1].src = coursesSlider[1 + counter1].image;
//             coursesImage[2].src = coursesSlider[2 + counter1].image;
//         }

// };

// function changeTitle (counter){
    
//     coursesText[0].textContent = coursesSlider[0 + counter1].title;
        

//         if (counter1 === coursesSlider.length - 2){
//             coursesText[1].textContent = coursesSlider[1 + counter1].title;
//             coursesText[2].textContent = coursesSlider[0].title;

//         }else if (counter1 === coursesSlider.length - 1){
//             coursesText[1].textContent = coursesSlider[0].title;
//             coursesText[2].textContent = coursesSlider[1].title;

//         }else {
//             coursesText[1].textContent = coursesSlider[1 + counter1].title;
//             coursesText[2].textContent = coursesSlider[2 + counter1].title;
//         }

// };




};

main();
