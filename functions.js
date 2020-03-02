(function() {
    let placeholderDiv = document.getElementById("placeholderDiv");

    /*var xmlRequest = new XMLHttpRequest();

    xmlRequest.open("GET","http://pushadmin.dropmind.com/api/slider");
    xmlRequest.onload = function(){

        if (xmlRequest.status === 200){
            console.table(xmlRequest.response);
        }
        else if (xmlRequest.status === 404){
            alert("response 404")
        }
        else {
            alert("Unknown error");
        }
    };
    xmlRequest.send();
    } */

    var request = new Request("http://pushadmin.dropmind.com/api/teachers");

    fetch(request)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                alert("Response error");
            }
        })
        .then(function(object) {
            console.log(object);
            object.forEach(element => {
                console.log(element);
            });
        })
        .catch(function(error) {
            console.log(error);
        })

})();
//var slider = [];

var request = new Request("http://pushadmin.dropmind.com/api/slider");

fetch(request)
    .then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            alert("Response error");
        }
    })
    .then(function(object) {
        console.log(object);
        object.forEach(element => {
            console.log(element);
        });
        sliderLogic(object);
    })
    .catch(function(error) {
        console.log(error);
    })






// var slider = [{
//         imageurl: "images/slider-image1.jpg",
//         title: "Start your journey with our practical courses AAAA",
//         description: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
//         url: ""
//     },
//     {
//         imageurl: "images/slider-image2.jpg",
//         title: "Start your journey with our practical courses 2 ",
//         description: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
//         url: ""
//     },
//     {
//         imageurl: "images/slider-image3.jpg",
//         title: "Start your journey with our practical courses 3",
//         description: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
//         url: ""
//     }
// ];

function sliderLogic(slider) {
    let imagePrefix = "http://pushadmin.dropmind.com/";
    let currentIndex = 0;
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    let sliderPhoto = document.getElementById("slider-photo");
    //find h1 element
    let heading = document.getElementById("heading-text");
    //find paragraph element
    let paragraph = document.getElementById("slider-description");
    //find anchor
    let url = document.getElementById("slider-url");

    function changeSlide(index) {
        currentIndex = currentIndex + index;

        if (currentIndex > slider.length - 1) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = slider.length - 1;
        }



        sliderPhoto.src = imagePrefix + slider[currentIndex].imageurl;
        heading.innerHTML = slider[currentIndex].title;
        // paragraph.innerHTML = slider[currentIndex].description;
        url.href = slider[currentIndex].url;
        url.innerHTML = "hocu da pise nesto drugo";

        console.log(currentIndex);
    }

    changeSlide(0);

    prev.addEventListener("click", function() {
        changeSlide(-1);
    });
    next.addEventListener("click", function() {
        changeSlide(+1);
    });
}

//})(); 

// if (mobile) {
//     currentIndex = + -1

// } else
//     currentIndex + 1(+2)

let popularCourses = [{
        image: "images/courses-image1.jpg",
        date: "5/10/2018",
        time: "",
        url: ""
    },
    {
        image: "images/courses-image2.jpg",
        date: "5/10/2018",
        time: "",
        url: ""
    },
    {
        image: "images/courses-image3.jpg",
        date: "5/10/2018",
        time: "",
        url: ""
    },
    {
        image: "images/courses-image4.jpg",
        date: "6/10/2018",
        time: "",
        url: ""
    },
    {
        image: "images/courses-image5.jpg",
        date: "7/10/2018",
        time: "",
        url: ""
    },
];

let isMobile = false;

function checkIsMobile() {
    if (window.innerWidth <= 992) {
        isMobile = true;
    } else {
        isMobile = false;
    }

    console.log("da li je mobilna verzija: " + isMobile);
}


let left = document.getElementById("left");
let right = document.getElementById("right");
let coursesImage = document.getElementById("courses-image");


//ovde ce index biti 1,2 ili 3 jer prikayujemo tri slike 012, 120 i 012
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

window.addEventListener("resize", function() {
    //check window width
    checkIsMobile();
});



changeCourses(0);

left.addEventListener("click", function() {
    changeCourses(-1);
});
right.addEventListener("click", function() {
    changeCourses(+1);
});

//  kreiranje novih elemenata za tacke



let reviewsarray = [{
        image: " ",
        ime: " ",
        titula: "",
        tekst: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
        url: ""

    },
    {
        ime: "Andrio",
        titula: "Web developer",
        tekst: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
        src: "images/tst-image1.jpg",
        url: ""
    },
    {
        ime: "Andrio",
        titula: "Web developer",
        tekst: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
        src: "images/tst-image1.jpg",
        url: ""
    },
    {

        ime: "Andrio",
        titula: "Web developer",
        tekst: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
        src: "images/tst-image1.jpg",
        url: ""
    }
];


var parent = document.querySelector('.student-dots-all');


// ime, titula, tekst, src, zvezdice

reviewsarray.forEach(function(elementNiza, index) {

    var anchor = document.createElement('a');
    anchor.setAttribute("class", "dot");
    anchor.setAttribute("href", "javascript:;");
    anchor.innerHTML = '<i class="fas fa-dot-circle"></i>'
    let changeStudents = function() {

        // ovde trebe napisati funkciju koja ce da poziva razlicite elemente u okviru elemenata niza

    }
    anchor.addEventListener("click", changeStudents);
    parent.appendChild(anchor);
});