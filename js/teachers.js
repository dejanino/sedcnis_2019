function main (){

// let imagesTeachers = document.querySelectorAll('.teacher-image');
// console.log(imagesTeachers);
// let nameTeachers = document.querySelectorAll('.teachers-heading');
// console.log(nameTeachers);
// let sloganTeachers = document.querySelectorAll('.teachers-paragraph');
// console.log(sloganTeachers);


let request = new Request('http://pushadmin.dropmind.com/api/teachers', {method:'GET'});

fetch(request)
.then(function(response){
    if(response.ok){
        return response.json();
    }else {
        throw 'Nije dobar response'
    }

})
.then(function(teachers){
    console.log(teachers);
    teachersLogic(teachers);
})
.catch(function(greska){
    console.log('Greska')
});

function teachersLogic (teachers){

let imagesTeachers = document.querySelectorAll('.teacher-image');
console.log(imagesTeachers);
let nameTeachers = document.querySelectorAll('.teachers-heading');
console.log(nameTeachers);
let sloganTeachers = document.querySelectorAll('.teachers-paragraph');
console.log(sloganTeachers);
let teachersDiv = document.querySelectorAll('.teacher');
console.log(teachersDiv);

let imagePrefix = 'http://pushadmin.dropmind.com/';

teachers.forEach(function (element,index){
    console.log(teachers);
     console.log(teachers[0]);  

     teacherDetails(index);

    //pravim div u koji cu da smestam ikone za teacher
    let teachersIcons = document.createElement('div');
    teachersIcons.classList.add('teachers-icons');
    teachersDiv[index].appendChild(teachersIcons);

     //proveravam da li objekat ima property fb
     if (teachers[index].facebook !== ''){
        //pravim anchor element
        let anchor = document.createElement('a');
         anchor.classList.add('teacher-icon');
         anchor.setAttribute('href', 'https://www.facebook.com');
         anchor.setAttribute('target', 'blank');
         //dodajem anchor element u div za teacher
         teachersIcons.appendChild(anchor);
        //pravim i element i dodajem ikonicu za fb
        let fcbook = document.createElement('i');
        fcbook.setAttribute('class', 'fab fa-facebook-square');
        //dodajem i element u anchor
        anchor.appendChild(fcbook);
   }

   
    //proveravam da li objekat ima property email
    if (teachers[index].email !== ''){
        //pravim anchor element
        let anchor = document.createElement('a');
        anchor.classList.add('teacher-icon');
        anchor.setAttribute('href', 'mailto:' + 'teachers[index].email');
        //dodajem anchor element u div za teacher
        teachersIcons.appendChild(anchor);
        //pravim i element i dodajem ikonicu za mail
        let mail = document.createElement('i');
        mail.setAttribute('class', 'far fa-envelope');
        //dodajem i element u anchor
        anchor.appendChild(mail);
    }

    //proveravam da li objekat ima property google
    if (teachers[index].google !== ''){
        //pravim anchor element
        let anchor = document.createElement('a');
        anchor.classList.add('teacher-icon');
        anchor.setAttribute('href', 'https://www.google.com');
        anchor.setAttribute('target', 'blank');
        //dodajem anchor element u div za teacher
        teachersIcons.appendChild(anchor);
        //pravim i element i dodajem ikonicu za google
        let google = document.createElement('i');
        google.setAttribute('class', 'fab fa-google');
        //dodajem i element u anchor
        anchor.appendChild(google);
    }

    //proveravam da li objekat ima property instagram
    if (teachers[index].instagram !== ''){
        //pravim anchor element
        let anchor = document.createElement('a');
        anchor.classList.add('teacher-icon');
        anchor.setAttribute('href', 'https://instagram.com');
        anchor.setAttribute('target', 'blank');
        //dodajem anchor u div za teacher
        teachersIcons.appendChild(anchor);
        //pravim i element i dodajem ikonicu za instagram
        let instagram = document.createElement('i');
        instagram.setAttribute('class', 'fab fa-instagram');
        //dodajem i element u anchor
        anchor.appendChild(instagram);
    }

    //proveravam da li objekat ima property linkedin
    if (teachers[index].linkedin !== ''){
        //pravim anchor element
        let anchor = document.createElement('a');
        anchor.classList.add('teacher-icon');
        anchor.setAttribute('href', 'https://linkedin.com');
        anchor.setAttribute('target', 'blank');
        //dodajem anchor u div za teacher
        teachersIcons.appendChild(anchor);
        //pravim i element i dodajem ikonicu za linkedin
        let linkedin = document.createElement('i');
        linkedin.setAttribute('class', 'fab fa-linkedin-in');
        //dodajem i element u anchor
        anchor.appendChild(linkedin);
    }

    //proveravam da li objkekat ima property twitter
    if (teachers[index].twitter !== ''){
        //pravim anchor element
        let anchor = document.createElement('a');
        anchor.classList.add('teacher-icon');
        anchor.setAttribute('href', 'https://twitter.com/');
        anchor.setAttribute('target', 'blank');
        //dodajemo anchor u div za teacher
        teachersIcons.appendChild(anchor);
        //pravimo i element i dodajemo ikonicu za twitter
        let twitter = document.createElement('i');
        twitter.setAttribute('class', 'fab fa-twitter');
        //dodajemo i element u anchor
        anchor.appendChild(twitter);
    }
    

   
});

function teacherDetails (index){

    imagesTeachers[index].src = imagePrefix + teachers[index].avatarurl;
    nameTeachers[index].textContent = teachers[index].name;
    sloganTeachers[index].textContent = teachers[index].slogan;

}

}





};

main();

