let main = function () {
    let placeholderDiv = document.getElementById("placeholderDiv");



    let request2 = new Request("http://pushadmin.dropmind.com/api/teachers");

    fetch(request2)

        .then(function (response) {
            console.log(response)
            if (response.ok) {
                return response.json();
            } else {
                alert("Response error");
            }
        })

        .then(function (object) {
            console.log(object);
            funkcija(object);
        })

        .catch(function (error) {
            console.log(error);
        });


    let mainn = document.getElementById("teachers-main");

    let funkcija = function (profesori) {

        profesori.forEach((element) => {

            let imagePrefix = "http://pushadmin.dropmind.com/";

            let glavni = document.createElement('div');
            glavni.classList.add('teacher');
            let imageDiv = document.createElement('div');
            imageDiv.classList.add('teachers-image');
            let slika = document.createElement('img');
            slika.setAttribute('src', imagePrefix + element.avatarurl);
            imageDiv.appendChild(slika);


            let ime = document.createElement('div');
            ime.classList.add('teachers-text');
            ime.textContent = element.name;

            let slogan = document.createElement('p');
            slogan.classList.add('teachers-text');
            slogan.textContent = element.slogan;

            /* let email = document.createElement('email');
            email.classList.add('email');
            email.textContent = element.email; */

            let mainTeachersIcons = document.createElement('div');
            mainTeachersIcons.classList.add('teachers-icons');


            let facebook = document.createElement('a');
            facebook.classList.add('teacher-icon');
            let fontFb = document.createElement('i');
            fontFb.classList.add('fab', 'fa-facebook-square');
            facebook.appendChild(fontFb);

            let twitter = document.createElement('a');
            twitter.classList.add('teacher-icon');
            let fontTw = document.createElement('i');
            fontTw.classList.add('fab', 'fa-twitter-square');
            twitter.appendChild(fontTw);

            let lnkd = document.createElement('a');
            lnkd.classList.add('teacher-icon');
            let fontLi = document.createElement('i');
            fontLi.classList.add('fab', 'fa-linkedin');
            lnkd.appendChild(fontLi);

            let instagram = document.createElement('a');
            instagram.classList.add('teacher-icon');
            let fontIg = document.createElement('i');
            fontIg.classList.add('fab', 'fa-instagram');
            instagram.appendChild(fontIg);

            mainTeachersIcons.appendChild(facebook);
            // mainTeachersIcons.appendChild(email);
            mainTeachersIcons.appendChild(twitter);
            mainTeachersIcons.appendChild(instagram);
            mainTeachersIcons.appendChild(lnkd);



            glavni.appendChild(imageDiv);
            glavni.appendChild(ime);
            glavni.appendChild(slogan);

            glavni.appendChild(mainTeachersIcons);

            mainn.appendChild(glavni);

            if (ime === "") {
                ime.textContent = "No name";
            }

            if (email === "") {
                email.textContent = "No email";
            }

            if (slogan === "") {
                slogan.style.display = 'none';
            }
        });
    };

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

    /* var request = new Request("http://pushadmin.dropmind.com/api/teachers");

    fetch(request)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                alert("Response error");
            }
        })
        .then(function (object) {
            console.log(object);
            let placeholderDiv = document.getElementById("placeholderDiv");
            let markup = "";
            object.forEach(element => {

                markup += `
                    < div class="person">
                        <h2>
                            ${element.name}
                        </h2>
                        <p class="" >${element.slogan}</p>
                        <img class="" src='${ element.avatarurl}' />

                </div >
                    `;
            });
        })(); */


    /* 
            var request = new Request('http://pushadmin.dropmind.com/api/teachers');

            /* PRAVIM FETCH REQUEST */
    /*         let allTeachers = [];
            fetch(request)
                .then(function(response) {

                    if (response.ok) {
                        return response.json()
                    } else alert('response error');

                // })
                // /* PRAVIM FUNKCIJU */
    // .then(function(object) {
    //     console.log(object)

    //     let teachersContainerDiv = document.getElementById("teacher1-container");
    //     let markup = "";

    //     object.forEach(function(elementNiza, index) {

    //         var anchor = document.createElement('a');
    //         anchor.setAttribute("class", "dot");
    //         anchor.setAttribute("href", "javascript:;");
    //         anchor.innerHTML = '<i class="fas fa-dot-circle"></i>'
    //         let changeTeachers = function() {

    //                 // ovde trebe napisati funkciju koja ce da poziva razlicite teacher-e

    //             }
    //              */
    //         parent.appendChild(anchor);

    //         console.log(changeTeachers)

    //     });


    // }) */ */


    // /*     object.forEach(element => {
    //         console.log(element);
    //     });
    // })
    // .catch(function(error) {
    //     console.log(error);
    // }) */



    //var slider = [];

    var request = new Request("http://pushadmin.dropmind.com/api/slider");

    fetch(request)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                alert("Response error");
            }
        })
        .then(function (object) {
            console.log(object);
            object.forEach(element => {
                console.log(element);
            });
            sliderLogic(object);
        })
        .catch(function (error) {
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

        prev.addEventListener("click", function () {
            changeSlide(-1);
        });
        next.addEventListener("click", function () {
            changeSlide(+1);
        });
    }

    //})(); 

    // if (mobile) {
    //     currentIndex = + -1

    // } else
    //     currentIndex + 1(+2)

    // let popularCourses = [{
    //     image: "images/courses-image1.jpg",
    //     date: "5/10/2018",
    //     time: "",
    //     url: ""
    // },
    // {
    //     image: "images/courses-image2.jpg",
    //     date: "5/10/2018",
    //     time: "",
    //     url: ""
    // },
    // {
    //     image: "images/courses-image3.jpg",
    //     date: "5/10/2018",
    //     time: "",
    //     url: ""
    // },
    // {
    //     image: "images/courses-image4.jpg",
    //     date: "6/10/2018",
    //     time: "",
    //     url: ""
    // },
    // {
    //     image: "images/courses-image5.jpg",
    //     date: "7/10/2018",
    //     time: "",
    //     url: ""
    // },
    // ];

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
    var fetchCourses = new Request("http://pushadmin.dropmind.com/api/courses");
    fetch(fetchCourses)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            alert("Response error");
        }
    })
    .then(function (object) {
        console.log(object);
        object.forEach(element => {
            console.log(element);
        });
        changeCourses(object);
    })
    .catch(function (error) {
        console.log(error);
    })

    function changeCourses(sign) {
        for (let i = 0; i < counters.length; i++) {
            counters[i] = counters[i] + sign;
            if (counters[i] > popularCourses.length - 1) {
                counters[i] = 0;
            } else if (counters[i] < 0) {
                counters[i] = popularCourses.length - 1;
            }
            applyCounters(i);
        }

    }
    let mobilePhoto = document.getElementsByClassName("photo-mobile")[0];
    let desktopPhotos = document.getElementsByClassName("photo-desktop");

    let apiPrefix = "http://pushadmin.dropmind.com/";
    let applyCounters = function (i) {
        mobilePhoto.src = apiPrefix + popularCourses[counters[0]].image;
        desktopPhotos[i].src = apiPrefix + popularCourses[counters[i]].image;
    }
    changeCourses(0);

    right.addEventListener('click', function () {
        changeCourses(-1);
        console.log(counters);
    });

    left.addEventListener('click', function () {
        changeCourses(+1);
    });

    window.addEventListener("resize", function () {
        //check window width
        checkIsMobile();
    });


    //  kreiranje novih elemenata za tacke



    // let reviewsarray = [{
    //         image: " ",
    //         ime: " ",
    //         titula: "",
    //         tekst: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
    //         url: ""

    //     },
    //     {
    //         ime: "Andrio",
    //         titula: "Web developer",
    //         tekst: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
    //         src: "images/tst-image1.jpg",
    //         url: ""
    //     },
    //     {
    //         ime: "Andrio",
    //         titula: "Web developer",
    //         tekst: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
    //         src: "images/tst-image1.jpg",
    //         url: ""
    //     },
    //     {

    //         ime: "Andrio",
    //         titula: "Web developer",
    //         tekst: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
    //         src: "images/tst-image1.jpg",
    //         url: ""
    //     }
    // ];

    let request1 = new Request("http://pushadmin.dropmind.com/api/reviews");

    fetch(request1)

        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                alert("Response error");
            }
        })

        .then(function (object) {
            console.log(object);
            applyReviews(object);
        })

        .catch(function (error) {
            console.log(error);
        });
    var parent = document.querySelector('.student-dots-all');
    let imagePrefix = "http://pushadmin.dropmind.com/";



    // ovde trebe napisati funkciju koja ce da poziva razlicite elemente u okviru elemenata niza
    // ime, titula, tekst, src, zvezdice
    let applyReviews = function (reviewsarray) {
        let changeStudents = function (idx) {
            let slika = document.getElementById('review-image');
            slika.src = imagePrefix + reviewsarray[idx].student.imageurl;

            // let avatarText = document.getElementById('avatar-text');
            // avatarText.textContent = reviewsarray[idx].student.name;

            let avatarText1 = document.getElementById('avatar-text-name');
            avatarText1.textContent = reviewsarray[idx].student.name;

            let avatarText2 = document.getElementById('avatar-text-title');
            avatarText2.textContent = reviewsarray[idx].student.position;

            let avatarText3 = document.getElementById('student-paragraf-reviewText');
            avatarText3.textContent = reviewsarray[idx].reviewtext;

            let starsReview = document.querySelector('.student-stars');
            starsReview.innerHTML = '';
            for (let i = 0; i < reviewsarray[idx].grade; i++) {
                let star = document.createElement('i');
                star.classList.add('fas', 'fa-star');
                starsReview.appendChild(star);
            }


        }
        changeStudents(0);
        reviewsarray.forEach(function (review, index) {
            console.log(review);
            var anchor = document.createElement('a');
            anchor.setAttribute("class", "dot");
            anchor.setAttribute("href", "javascript:;");
            anchor.innerHTML = '<i class="fas fa-dot-circle"></i>'

            anchor.addEventListener("click", function () { changeStudents(index) });
            parent.appendChild(anchor);
        });
    };

}
main();