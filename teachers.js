let request2 = new Request('http://pushadmin.dropmind.com/api/teachers', {method: 'GET'});

fetch(request2)
.then(function(response){
    console.log(response);
    if (response.ok){
        return response.json();
    }
    else {
        throw 'Response nije ok';
    }
})
.then(function(objekat){
    applyTeachers(objekat);
})
.catch(function(greska){
    console.log('Greska!', greska)
});

let applyTeachers = function(teachers) {
    teachers.forEach(function(teacher) {
        console.log(teacher);
    });
}

let teacher = document.createElement('div');
teachersPhoto.setAttribute("class", "teacher")
let teachersPhoto = document.createElement('div');
teachersPhoto.setAttribute("class", "teachers-image");
let teacherText = document.createElement('div');
teachersText.setAttribute("class", "teachers-text");
let teacherHeading = document.createElement('h2');
teachersHeading.setAttribute("class", "teachers-heading");
let teacherParagraph = document.createElement('p');
teacherParagraph.setAttribute("class", "teachers-paragraph");
let teachersIcons = document.createElement("div");
teacherIcons.setAttribute("class", "teachers-icons");

teacher.appendChild(teachersPhoto);
teacher.appendChild(teachersText);
teacher.appendChild(teachersIcons);



applyTeachers.forEach(function(elementContent, index){
    console.log(elementContent, index);

    let facebook = document.createElement('a');
    facebook.classList.add('teachers-icon');
    let fontFb =  document.createElement('i');
    fontFb.classList.add('fab', 'fa-facebook-square');
    facebook.appendChild(fontFb);

    let twitter = document.createElement('a');
    twitter.classList.add('teachers-icon');
    let fontTw =  document.createElement('i');
    fontFb.classList.add('fab', 'fa-twitter-square');
    twitter.appendChild(fontTw);

    let instagram = document.createElement('a');
    instagram.classList.add('teachers-icon');
    let fontIn =  document.createElement('i');
    fontIn.classList.add('fab', 'fa-instagram-square');
    instagram.appendChild(fontIn);

    let linkedin = document.createElement('a');
    linkedin.classList.add('teachers-icon');
    let fontLn =  document.createElement('i');
    fontLn.classList.add('fab', 'fa-linkedin-square');
    linkedin.appendChild(fontLn);

    let google = document.createElement('a');
    google.classList.add('teachers-icon');
    let fontGo =  document.createElement('i');
    fontGo.classList.add('fab', 'fa-facebook-square');
    google.appendChild(fontGo);

    teachersIcons.appendChild(facebook);
    teachersIcons.appendChild(twitter);
    teachersIcons.appendChild(linkedin);
    teachersIcons.appendChild(instagram);
    teachersIcons.appendChild(google);

    teachersReview[index].index = index;

});








/*
let getName = document.getElementById("fullName");
let getMail = document.getElementById("fullEmail");
let getText = document.getElementById("input");
let button = document.querySelector(".contact-form-submit");

button.addEventListener('click', function(){

    if(getName.value === ""){
        alert("Niste uneli ispravan podatak");
    } 
    else if(getMail.value === ""){
        alert("Niste uneli ispravan podatak");
    } 
    else if (getText.value === ""){
        alert("Niste uneli ispravan podatak");
    }
});

*/
