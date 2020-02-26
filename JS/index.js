let firstImage = document.querySelector('.background-picture')
let x = document.querySelector('.h3')
let paragraph = document.querySelector('.paragraph-slider')
let anchor = document.querySelector('.anchor')
let slider = [{img:"images/slider-image1.jpg",
               tittle: "Something writtten",
               description: "Something written in paragraphs",
               url: "#footer"

              },             
              {img:"images/slider-image2.jpg",
               tittle: "Something but other",
               description: "Bla blsahdada sadadas",
               url: "#footer"
              },
              {img:"images/slider-image3.jpg",
               tittle: "Something but saassa",
               description: "awsadkasif adfaf",
               url: "#footer"
              }
            ]

let imageIndex = 0;
let dugmeDesno = document.querySelector('.dugme-desno') 
let dugmeLevo = document.querySelector('.dugme-levo') 

function changeSlide(aindex){
    imageIndex = imageIndex + aindex;

    if (imageIndex > slider.length - 1){
        imageIndex = 0;
    }
    else if (imageIndex < 0){
        imageIndex = slider.length -1;
    }
    firstImage.src = slider[imageIndex].img;
    x.innerHTML = slider[imageIndex].tittle;
    paragraph.innerHTML = slider[imageIndex].description;
    anchor.href = slider[imageIndex].url;

    console.log(imageIndex)
}
changeSlide(0)

dugmeDesno.addEventListener('click', function(){
    changeSlide(1);
});
dugmeLevo.addEventListener('click',function(){
    changeSlide(-1);
});
       let navigationBar = document.querySelector('.nav'); 
       //funkcija za gasenje i paljenje
       let dropDownMenu = function() {
           let navBarInvisible = navigationBar.classList.contains('prikazan-nav');
       
           if (navBarInvisible) {
               navigationBar.classList.remove('prikazan-nav');
            
           }
           else {
               navigationBar.classList.add('prikazan-nav');
               
           }
       }
       let anchorClick = document.querySelector('.drop-down-menu');
       anchorClick.addEventListener('click', dropDownMenu); 
// ODAVDE IDE ZA COURSES
let divZaSvaJedan = document.getElementById("courses-container-mobile");
let divZaSvaTri = document.getElementById("courses-container-desktop");

let mediaQuery768 = function(){
    let isMobile = window.matchMedia("(max-width: 992px)");

    if(isMobile.matches){
        divZaSvaTri.style.display = "none";
        divZaSvaJedan.style.display = "flex";
    }
    else{
        divZaSvaJedan.style.display = "none";
        divZaSvaTri.style.display = "flex";
    }
}
window.addEventListener("resize", mediaQuery768);
mediaQuery768(0);

dugmeCoursesDesno = document.getElementById("dugme-desno-768");
dugmeCoursesLevo = document.getElementById("dugme-levo-768");

let coursesSlider = [{imageCourses:"images/courses-image1.jpg"},             
                     {imageCourses:"images/courses-image2.jpg"},
                     {imageCourses:"images/courses-image3.jpg"},
                     {imageCourses:"images/courses-image4.jpg"},
                     {imageCourses:"images/courses-image5.jpg"}
                    ]
let coursesIndex = 0;
let coursesBigPicture = document.querySelector('.for-768');
console.log(coursesSlider[0])
//OVDE CU DA MORAM DA POZOVEM SVE ODJEDNOM
function changeSlideCourses(other){
    coursesIndex = coursesIndex + other;

    if (coursesIndex > coursesSlider.length - 1){
        coursesIndex = 0;
    }
    else if (coursesIndex < 0){
        coursesIndex = coursesSlider.length -1;
    }
    coursesBigPicture.src = coursesSlider[coursesIndex].imageCourses;
    console.log(coursesIndex)
}
changeSlideCourses(0)

dugmeCoursesDesno.addEventListener('click', function(){
    changeSlideCourses(1); 
});
dugmeCoursesLevo.addEventListener('click', function(){
    changeSlideCourses(-1);
});


dugmeCoursesDesnoDesktop = document.getElementById("desno-courses");
dugmeCoursesLevoDesktop = document.getElementById("levo-courses");

let prvaSlickaDesktop = document.getElementById("first-picture-desktop");
let drugaSlickaDesktop = document.getElementById("second-picture-desktop");
let trecaSlickaDesktop = document.getElementById("third-picture-desktop");

let i = 0;
dugmeCoursesDesnoDesktop.addEventListener("click", function(){
    if(i<coursesSlider.length - 1){
        let izbacen = coursesSlider.shift()
        coursesSlider.push(izbacen)

    }
    else {
        i = 0;
    }
    prvaSlickaDesktop.src = coursesSlider[0].imageCourses;
    drugaSlickaDesktop.src = coursesSlider[1].imageCourses;
    trecaSlickaDesktop.src = coursesSlider[2].imageCourses;
})

let j = 0;
dugmeCoursesLevoDesktop.addEventListener("click", function(){
    if(j<coursesSlider.length - 1){
        let izbacenSuprotno = coursesSlider.pop()
        coursesSlider.unshift(izbacenSuprotno)

    }
    else {
        j = 0;
    }
    prvaSlickaDesktop.src = coursesSlider[0].imageCourses;
    drugaSlickaDesktop.src = coursesSlider[1].imageCourses;
    trecaSlickaDesktop.src = coursesSlider[2].imageCourses;
})


let forThumbnail = [{imageStudents:"images/tst-image1.jpg"},             
                     {imageStudents:"images/tst-image2.jpg"},
                     {imageStudents:"images/tst-image3.jpg"},
                     {imageStudents:"images/tst-image4.jpg"}
                    ]

forThumbnail.forEach(function(elementContent, index){
    console.log(elementContent, index)
    let studentPicture = document.getElementById('slika-student')
    let parent = document.getElementById('wrapper-for-anchors');
    let anchor1 = document.createElement('a');
    anchor1.setAttribute("class", "dot");
    anchor1.setAttribute("href", "javascript:;");
    anchor1.style.fontSize = "14px";
    anchor1.innerHTML = "<i class='fa'>&#xf192;</i>";
    parent.appendChild(anchor1)
    forThumbnail[index].index = index;
    forThumbnail[index].idKojiSamJaOnakoNpr = "dot-" + index;
    forThumbnail[index].url = "/review-" + index;

    anchor1.addEventListener('click', function(){
        studentPicture.src = forThumbnail[index].imageStudents;
    })
  
})


    



