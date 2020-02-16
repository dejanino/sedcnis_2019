let sliderImages = [
    {
        image: "images/slider-image1.jpg",
        title: "Title1",
        text: `Our online are designed.......`,
        url: "Discover More"
        //href://
    },


    {
        image: "images/slider-image2.jpg",
        title: "Title 2...",
        text: `Our online courses are build in partnership with technology leaders
 and are designed to meetindustry demands`,
        url: "Take a course"
        //href://
    },

    {
        image: "images/slider-image3.jpg",
        title: "Our Eficient Learning Methods",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam varius consequat diam, id mollis eros malesuada quis`,
        url: "Let's Chat"
        //href://
    },
];

let slideIndex = 0;

let prev = document.getElementById("prev");
let next = document.getElementById("next");

function slideChange(n) {
    // let i;
    slideIndex = n;
    let slide = document.getElementById("slider-photo");
    let slideT = document.getElementById("heading-text");
    let slideP = document.getElementById("description-text");
    let sliderA = document.getElementById("slider-url");


    if (n > sliderImages.length - 1) { slideIndex = 0 }
    if (n < 0) { slideIndex = sliderImages.length - 1 }

    slide.src = sliderImages[slideIndex].image;
    slideT.innerHTML = sliderImages[slideIndex].title;
    slideP.innerHTML = sliderImages[slideIndex].text;
    sliderA.innerHTML = sliderImages[slideIndex].url;
    // sliderA.href=  sliderImages[slideIndex].href;
    // slide.classList.remove("fade");
    // slide.classList.add("fade");
}


function nextSlide(n) {
    if (n < 0) { slideChange(slideIndex - 1) }
    else { slideChange(slideIndex + 1) }

}

prev.addEventListener("click", function () {
    nextSlide(-1);
});
next.addEventListener("click", function () {
    nextSlide(+1);
});

setInterval(function () { nextSlide(+1) }, 4000);

// slideChange(0);

let courseSlide = [
    {
        image: "images/courses-image1.jpg",
        date: "2019/12/12",
        time: "10:12",
        title: "nasl1",
        desc: "asd",
        avatar: "images/author-image2.jpg",
        name: "sdfsdf",
        button: "Free"
    },
    {
        image: "images/courses-image2.jpg",
        date: "2019/12/12",
        time: "10:12",
        title: "nasl2",
        desc: "asd",
        avatar: "images/author-image2.jpg",
        name: "sdfsdf",
        button: "Free"
    },
    {
        image: "images/courses-image3.jpg",
        date: "2019/12/12",
        time: "10:12",
        title: "nasl3",
        desc: "asd",
        avatar: "images/author-image2.jpg",
        name: "sdfsdf",
        button: "Free"
    },
    {
        image: "images/courses-image4.jpg",
        date: "2019/12/12",
        time: "10:12",
        title: "nasl4",
        desc: "asd",
        avatar: "images/author-image2.jpg",
        name: "sdfsdf",
        button: "Free"
    },
    {
        image: "images/courses-image5.jpg",
        date: "2019/12/12",
        time: "10:12",
        title: "nasl5",
        desc: "asd",
        avatar: "images/author-image2.jpg",
        name: "sdfsdf",
        button: "Free"
    },
    // {
    //     image: "images/courses-image1.jpg",
    //     date: "2019/12/12",
    //     time: "10:12",
    //     title: "nasl1",
    //     desc: "asd",
    //     avatar: "images/author-image2.jpg",
    //     name: "sdfsdf",
    //     button: "Free"
    // },

]

let courseIndex = 0;

function courseChange(n) {
    // let i;
    courseIndex = n;
    let coursesContainer = document.getElementById(widthId);
    let slide = coursesContainer.getElementsByClassName("courses-image");
    let slideT = coursesContainer.getElementsByClassName("courses-text");
    let slideA = coursesContainer.getElementsByClassName("courses-avatar");
    // let sliderA = document.getElementById("slider-url");


    if (n > courseSlide.length - 1) { courseIndex = 0 }
    if (n < 0) { courseIndex = courseSlide.length - 1 }


    for(let i = 0; i< slide.length; i++){
        let currIndex = returnIndex(courseIndex + i);
        let img =slide[i].getElementsByTagName("img");
        img[0].src = courseSlide[currIndex].image;
        let dateTime = slide[i].getElementsByTagName("h2");
        dateTime[0].innerHTML = courseSlide[currIndex].date;
        dateTime[1].innerHTML = courseSlide[currIndex].time;

        //naslov
        let h2 = slideT[i].getElementsByTagName("h2");
        h2[0].innerHTML = courseSlide[currIndex].title;
        let p = slideT[i].getElementsByTagName("p");
        p[0].innerHTML=courseSlide[currIndex].title;

        //avatar
        let imgA = slideA[i].getElementsByTagName("img");
        imgA[0].src = courseSlide[currIndex].avatar;
        let name = slideA[i].getElementsByTagName("p");
        name[0].innerHTML = courseSlide[currIndex].name;
        let btn= slideA[i].getElementsByTagName("input");
        btn.innerHTML = courseSlide[currIndex].button;

    }


}

function returnIndex(x){
    return x % courseSlide.length;
}

let squareLeft = document.getElementById("squareLeft");
let squareRight = document.getElementById("squareRight");

squareLeft.addEventListener("click", function () {
    nextCourseSlide(-1);
});
squareRight.addEventListener("click", function () {
    nextCourseSlide(+1);
});

function nextCourseSlide(n) {
    if (n < 0) { courseChange(courseIndex - 1) }
    else { courseChange(courseIndex + 1) }

}



let widthId;
window.addEventListener("resize", function () {
    //check window width
    if(window.innerWidth < 992){
        widthId ="courses-container-mobile";
        courseChange(courseIndex);
    }
    else{
        widthId = "courses-container-desktop";
        courseChange(courseIndex);
    }
});

window.addEventListener("load", function(){
    if(window.innerWidth < 992){
        widthId ="courses-container-mobile"
    }
    else{
        widthId = "courses-container-desktop";
    }
    courseChange(0);
})
