let firstImage = document.querySelector('.background-picture')
let x = document.querySelector('.h3')
let paragraph = document.querySelector('.paragraph-slider')
let anchor = document.querySelector('.anchor')

let request1 = new Request("http://pushadmin.dropmind.com/api/slider")
fetch(request1)
.then(function(response) {
    if(response.ok){
        return response.json()
       
    }
    else{
        alert("Error")
    }
})
.then(function(slider){
console.log(slider)
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
    firstImage.src = slider[imageIndex].imageurl;
    x.innerHTML = slider[imageIndex].title;
    paragraph.innerHTML = slider[imageIndex].description;
    anchor.href = slider[imageIndex].url;

}
changeSlide(0)

dugmeDesno.addEventListener('click', function(){
    changeSlide(1);
});
dugmeLevo.addEventListener('click',function(){
    changeSlide(-1);
});
})
.catch(function(error){
    alert(error)
})
/*let slider = [{img:"images/slider-image1.jpg",
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
            ]*/


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

let mediaQuery992 = function(){
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
window.addEventListener("resize", mediaQuery992);
mediaQuery992(0);

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


let forThumbnail = [{imageStudents:"images/tst-image1.jpg",
                     propertyForHeading2: "Jackson",
                     stars: 5},   
                    
                     {imageStudents:"images/tst-image2.jpg",
                     propertyForHeading2: "Svetlana",
                     stars: 4},

                     {imageStudents:"images/tst-image3.jpg",
                     propertyForHeading2: "Mirjana",
                     stars: 5},

                     {imageStudents:"images/tst-image4.jpg",
                     propertyForHeading2: "NekiLik",
                     stars: 3},

                     {imageStudents:"images/tst-image3.jpg",
                     propertyForHeading2: "IstoNeko",
                     stars: 2},

                     {imageStudents:"images/tst-image2.jpg",
                     propertyForHeading2: "Stojanka",
                     stars: 1}
                    ]

forThumbnail.forEach(function(elementContent, index){
    let studentPicture = document.getElementById('slika-student')
    let nameOfAStudent = document.getElementById('h2')
    let parent = document.getElementById('wrapper-for-anchors');
    let tacka = document.createElement('a');
    tacka.setAttribute("class", "dot");
    tacka.setAttribute("href", "javascript:;");
    tacka.style.fontSize = "14px";
    tacka.innerHTML = "<i class='fa'>&#xf192;</i>";
    parent.appendChild(tacka);
 
    /*forThumbnail[index].index = index;
    forThumbnail[index].idKojiSamJaOnakoNpr = "dot-" + index;
    forThumbnail[index].url = "/review-" + index;*/
    

    tacka.addEventListener('click', function(){
        studentPicture.src = forThumbnail[index].imageStudents;
        nameOfAStudent.textContent = forThumbnail[index].propertyForHeading2;
        let drawingOfStars = document.querySelector('#container-for-stars');
        let justStars = forThumbnail[index].stars;
        drawingOfStars.innerHTML = ''
        for (let counter = 0; counter<justStars; counter++){
            let zvezdica = document.createElement('a')
            zvezdica.setAttribute('class', 'one-star')
            zvezdica.innerHTML = "<i class='fa'>&#xf005;</i>"
            drawingOfStars.appendChild(zvezdica);
        }
        
    })
    
    let slikaZaHover = document.getElementById('slika-hover');
    tacka.addEventListener('mouseover', function(){
        let divZaPrikaz = document.querySelector('.bez-style');
        divZaPrikaz.style.display = 'flex';
        slikaZaHover.src = forThumbnail[index].imageStudents;
        divZaPrikaz.classList.add('style');
        let pomeranjeSlike = document.querySelector('.style');
        let pozicijaTacke = tacka.getBoundingClientRect();
        let kordinateX = pozicijaTacke.left -15;
        let kordinateY = pozicijaTacke.top - 100;

        pomeranjeSlike.style.left  = kordinateX + 'px';
        pomeranjeSlike.style.top = kordinateY + 'px' ;
    })

    tacka.addEventListener('mouseout', function(){
        let divZaPrikaz = document.querySelector('.bez-style');
        divZaPrikaz.style.display = 'none';
    })
  
})


    



