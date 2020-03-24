function main () {

    
    // var coursesSlider = [
    //     {
    //         image: 'images/courses-image1.jpg' ,
    //         title: 'Bussines & Management',
    //         description : 'Lorem',
    //         avatarImage : 'images/author-image1.jpg',
    //         name: 'Mark'
    //     },
        
    //     {
    //         image: 'images/courses-image2.jpg' ,
    //         title: 'Bussines & Bussines',
    //         description : 'Borem',
    //         avatarImage : 'images/author-image2.jpg',
    //         name: 'Jesica'
    //     },
        
    //     {
    //         image: 'images/courses-image3.jpg' ,
    //         title: 'Management & Bussines',
    //         description : 'Smorem',
    //         avatarImage : 'images/author-image3.jpg',
    //         name: 'Nicole'
    //     },

    //     {
    //         image: 'images/courses-image4.jpg' ,
    //         title: 'Management & Management',
    //         description : 'Vlorem',
    //         avatarImage : 'images/author-image4.jpg',
    //         name: 'Daniel'
    //     },

    //     { 
    //          image: 'images/courses-image5.jpg' ,
    //          title: 'Management ',
    //          description : 'Glorem',
    //          avatarImage : 'images/tst-image1.jpg',
    //          name: 'John'
    
    //     }

    // ]

    let request = new Request ('http://pushadmin.dropmind.com/api/courses', {method:'GET'});

    fetch(request)
    .then(function(response){
        if(response.ok){
            return response.json();
        }else {
            throw 'Response nije ok'
        }

    })
    .then(function(coursesSlider){
        // console.log(coursesSlider);
        courseLogic(coursesSlider);
    
    })
    .catch(function(greska){
        console.log('Greska', greska);
    })


function courseLogic (coursesSlider){

    
    let isMobile = false;
    let counter = 0;
    let counters = [0,1,2];
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
    let coursesDate = document.querySelectorAll('.courses-date');
    
    // console.log(coursesText);
    // console.log(coursesImage);
    // console.log(coursesDescription);
    // console.log(coursesAvatar);
    // console.log(nameAvatar);
    // console.log(coursesDate);
    
    
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
            counter = coursesSlider.length -1;
            console.log(counter);
        }else {
            counter --;
            console.log(counter);
        }
        mobileChanger();

    }else {     

        for(var i = 0; i < counters.length; i++){
            
            if (counters[i] === 0){
                counters[i] = coursesSlider.length - 1;
                console.log(counters[i]);
            }else {
                counters[i] --;
                console.log(counters[i]);
            }        
            changeSlider(i);
        }
        
        

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
        
        for(var i = 0; i < counters.length; i++){

            
            if (counters[i] === coursesSlider.length - 1 ){
                counters[i] = 0 ;
                console.log(counters[i]);
            }else {
                counters[i] ++;
                console.log(counters[i]);
            }
            
            changeSlider(i);
        }
       
    }

});

let mobileChanger = function (){
    
    mobilePicture.src = coursesSlider[counter].image;
    mobileText.textContent = coursesSlider[counter].title;
    mobileDescription.textContent = coursesSlider[counter].description;
    avatarPicture.src = coursesSlider[counter].teacher.avatarurl;
    avatarName.textContent = coursesSlider[counter].teacher.name;
    // coursesDate.textContent = coursesSlider[counter].Course.date;
}

let changeSlider = function (i){
    
    coursesImage[i].src = coursesSlider[counters[i]].image;
    coursesText[i].textContent = coursesSlider[counters[i]].title;
    coursesDescription[i].textContent = coursesSlider[counters[i]].description;
    coursesAvatar[i].src = coursesSlider[counters[i]].teacher.avatarurl;
    nameAvatar[i].textContent = coursesSlider[counters[i]].teacher.name;
    // coursesDate.textContent = coursesSlider[counters[i]].Course.date;
}

}

};

main();
