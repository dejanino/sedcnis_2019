/*var slider = [{
    image: "images/slider-image1.jpg",
    title: "Distance Learning Education Center",
    description: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
    url: "Discover more"
},
{
    image: "images/slider-image2.jpg",
    title: "Start your journey with our practical courses",
    description: "Our online courses are desinged ti fit in your industry supporting all-round with latest technologies.",
    url: "Take a cours"
},
{
    image: "images/slider-image3.jpg",
    title: "Efficient learning methods",
    description: "Nam eget sapien vel nibh euismod vulputate in vel nibh.",
    url: "Let\'s chat"
}];*/
// http://pushadmin.dropmind.com/api/teachers
var slider = 0;

(function(){
    var request = new Request('http://pushadmin.dropmind.com/api/slider');

    fetch(request)
    .then(function(responce){
        if (responce.ok){
            return responce.json();
        }
        else {
            alert('Responce error');
        }
    })
    .then(function(object){
        console.log(object);

        slider = object;
        console.log(slider);
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
            //paragraph.innerHTML = slider[currentIndex].description;
            url.href = slider[currentIndex].url;
        
            console.log(currentIndex);
        }
        
        changeSlide(0);
        
        prev.addEventListener("click", function(){
            changeSlide(-1);
         });
        next.addEventListener("click", function(){ 
            changeSlide(+1);
        });
        
    })
    .catch(function(error){
        console.log(error);
    })

})();

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

(function(){
    var request = new Request('http://pushadmin.dropmind.com/api/teachers');

    fetch(request)
    .then(function(responce){
        if (responce.ok){
            return responce.json();
        }
        else {
            alert('Responce error');
        }
    })
    .then(function(object){
        console.log(object);



    })
    .catch(function(error){
        console.log(error);
    })

})();



var course = [{
    courses_image:'images/courses-image1.jpg',
    courses_title:'Social Media Manager'
},
{
    courses_image:'images/courses-image2.jpg',
    courses_title:'Graphic & Web Design'
},
{
    courses_image:'images/courses-image3.jpg',
    courses_title:'Marketing Communication'
},
{
    courses_image:'images/courses-image4.jpg',
    courses_title:'Summer Kids'
},
{
    courses_image:'images/courses-image5.jpg',
    courses_title:'Business & Management'
}];

console.log(course.length); // 5 tolko i treba

var indexi = [0, 1, 2];

let courselevo = document.getElementById('courselevo');
let coursedesno = document.getElementById('coursedesno');

let nizslika = document.getElementsByClassName('coursejpg');
console.log(nizslika);

let dodeljivanjeslika = function(i){
    nizslika[i].src = course[indexi[i]].courses_image;
};

function pomeraj(pomeraj){
    for (let i = 0; i < indexi.length; i++){
        indexi[i] = indexi[i] + pomeraj;
        if (indexi[i] < 0){
            indexi[i] = course.length - 1;
        } 
        else if (indexi[i] > course.length - 1){
            indexi[i] = 0;
        };
        dodeljivanjeslika(i);
    }
    console.log(indexi);
};

courselevo.addEventListener("click", function(){
    pomeraj(-1);
});

coursedesno.addEventListener("click", function(){
    pomeraj(1);
});



var teacher_grades = [{
    teacher_image:'images/tst-image1.jpg',
    teacher_h2:'Social Media Manager',
    //teacher_p: 'posao koji ima',
    //teacher_coment: '',
},
{
    teacher_image:'images/tst-image2.jpg',
    teacher_h2:'Social Media Manager',
},
{
    teacher_image:'images/tst-image3.jpg',
    teacher_h2:'Social Media Manager',
},
{
    teacher_image:'images/tst-image4.jpg',
    teacher_h2:'Social Media Manager',
}];

/*let zameni = function (){
    console.log(1)
}*/



let zameni = function (pozicija){
    console.log(pozicija)
    document.getElementById('slicica').src = teacher_grades[pozicija].teacher_image;
};

teacher_grades.forEach(function (element, indexelementa) {
    console.log(element, indexelementa);

    let parent = document.getElementById('parent');

    //let parent1 = document.getElementById('parent1');

    let anchor = document.createElement('a');
    anchor.setAttribute("class", "dot");
    //anchor.setAttribute("href", "javascript:;");
    anchor.style.fontSize = "25px";
    anchor.innerHTML = '<i class="fas fa-dot-circle"></i>';
    parent.appendChild(anchor);

    /*let div = document.createElement('div');
    div.classList.add('hide');
    parent1.appendChild(div);

    let previmg = document.createElement('img');
    previmg.setAttribute('class', 'previmg');

    div.appendChild(previmg);
    previmg.src =teacher_grades[indexelementa].teacher_image;*/
    
    anchor.addEventListener("click", function(){
        zameni(indexelementa);
    });
    /*
    anchor.addEventListener('mouseover', function(){
        let pregled = document.getElementsById(pregled);
        let previmg = document.createElement('img');
        previmg.setAttribute('class', 'previmg');
        div.appendChild(previmg);
        previmg.src =teacher_grades[indexelementa].teacher_image;
        
        let pozicijaAnchora = anchor.getBoundingClientRect();
        console.log(pozicijaAnchora);
        let kordinateX = pozicijaAnchora.left - 30;
        let kordinateY = pozicijaAnchora.top - 100;
        console.log(kordinateX, kordinateY);

        //pozicija.style.left  = kordinateX + 'px';
        //pozicija.style.top = kordinateY + 'px' ;
    });*/
    
});


/* 
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
*/


/*let nizprovera = teacher_grades.forEach(function (ind, index8){
console.log(ind, index8);
});*/

// foreach sa dva argumena 1 je ono sto se naazi 2 je indeks


/* validacija formi sing up i contact us */

let sing_up_button = document.getElementById('sing_up_button');

sing_up_button.addEventListener('click', function(event){
    let singup_name = document.getElementById('name');
    let singup_email = document.getElementById('email');
    let singup_password = document.getElementById('pw');

    if (singup_name.value === '' || singup_email.value === '' || singup_password.value === ''){
        event.preventDefault();

        if (singup_name.value === '') {
            let zvezdica1 = document.getElementById('name_mistake');
            zvezdica1.setAttribute('class', 'greska');
        };

        if(singup_email.value=== ''){
            let zvezdica2 = document.getElementById('email_mistake');
            zvezdica2.setAttribute('class', 'greska');
        };
        if(singup_password.value=== ''){
            let zvezdica3 = document.getElementById('pw_mistake');
            zvezdica3.setAttribute('class', 'greska');
        };
    }
});

let contact_us_button = document.getElementsByClassName('contact-form-submit')[0];
// ili let contact_us_button = document.querySelector('.contact-form-submit');

let contact_us_name = document.getElementById('fullName');
let contact_us_email = document.getElementById('fullEmail');
let contact_us_text = document.getElementById('tekst');

contact_us_button.addEventListener('click', function(event){

    if (contact_us_email.value==='') {
        event.preventDefault();
        contact_us_email.placeholder = 'NISTE UNELI MAIL';

        if (contact_us_name.value === ''){
            contact_us_name.placeholder = 'Niste uneli ime';
        };
    }
    else sendEmail(contact_us_name.value, contact_us_email.value, contact_us_text.value);
});

/*let x = 5
let la = function(b){
    console.log(b)
}
let lala = function(b){
    console.log(b)
}
la(x);
lala(x);
*/


function sendEmail(name, email, message) {
	const formData = {
	  'Name': name,
	  'EmailAddress': email,
	  'Message': message
	}
  
	let request = new Request('http://xercontrol.com/api/contactus', {
	  method: 'POST',
	  body: JSON.stringify(formData),
	  headers: {
		'Content-Type': 'application/json',
	  }
	});
  
	fetch(request)
	  .then(function (response) {
		if (response.ok) {
		  alert("mail sent")
		}
		else {
		  alert("nece biti");
		}
	  })
	  .catch(function (error) {
		console.log('Error!', error);
	  });
  
  }


