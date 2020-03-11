
// var courses = [
//   {
//     image: "images/courses-image1.jpg",
//     date: "14 / 02 / 2020",
//     title: "aaaaaaaaa",
//     description: "aaaaaaaaaaaaaaaaaaaaaaaa",
//     authorImage: "images/author-image1.jpg",
//   },
//   {
//     image: "images/courses-image2.jpg",
//     date: "15 / 02 / 2020",
//     title: "bbbbbbbbb",
//     description: "bbbbbbbbbbbbbbbbbbbbb",
//     authorImage: "images/author-image2.jpg",
//   },
//   {
//     image: "images/courses-image3.jpg",
//     date: "16 / 02 / 2020",
//     title: "cccccccccccc",
//     description: "cccccccccccccccccccccc",
//     authorImage: "images/author-image3.jpg",
//   },
//   {
//     image: "images/courses-image4.jpg",
//     date: "17 / 02 / 2020",
//     title: "ddddddddddddddd",
//     description: "ddddddddddddddddddddddddddddd",
//     authorImage: "images/author-image4.jpg",
//   },
//   {
//     image: "images/courses-image5.jpg",
//     date: "18 / 02 / 2020",
//     title: "eeeeeeeeeeeeeee",
//     description: "eeeeeeeeeeeeeeeeeeeeeeeeeeeee",
//     authorImage: "images/author-image1.jpg",
//   },
//   {
//     image: "images/courses-image1.jpg",
//     date: "19 / 02 / 2020",
//     title: "fffffffffffff",
//     description: "fffffffffffff",
//     authorImage: "images/author-image2.jpg",
//   },
//   {
//     image: "images/courses-image2.jpg",
//     date: "20 / 02 / 2020",
//     title: "gggggggggggggg",
//     description: "gggggggggggggggg",
//     authorImage: "images/author-image1.jpg",
//   },
//   {
//     image: "images/courses-image3.jpg",
//     date: "21 / 02 / 2020",
//     title: "hhhhhhhhhhhhh",
//     description: "hhhhhhhhhhhhhhh",
//     authorImage: "images/author-image3.jpg",
//   },
//   {
//     image: "images/courses-image4.jpg",
//     date: "22 / 02 / 2020",
//     title: "iiiiiiiiiiii",
//     description: "iiiiiiiiiiiiiiiii",
//     authorImage: "images/author-image4.jpg",
//   }
// ];
let courses;
let request2 = new Request("http://pushadmin.dropmind.com/api/courses")
fetch(request2)
  .then(function (response) {
    console.log(response)
    if (response.ok) {
      return response.json()
    }
    else {
      alert('Error')
    }
  })
  .then(function (object) {
    console.log(object);
    courses = object;

    var currentIndex = 0;

    var leftButtonCourses = document.getElementById("backCourses");
    var rightButtonCourses = document.getElementById("nextCourses");

    var coursesImageMobile = document.getElementById("courses-img-mobile");
    var coursesDateMobile = document.getElementById("date-mobile");
    var coursesTitleMobile = document.getElementById("courses-title-mobile");
    var coursesParagrafMobile = document.getElementById("courses-parag-mobile");
    var coursesAvatarMobile = document.getElementById("courses-avatar-mobile");

    var coursesImage = document.getElementsByClassName("courses-img");
    var coursesDate = document.getElementsByClassName("date");
    var coursesTitle = document.getElementsByClassName("courses-title");
    var coursesParagraf = document.getElementsByClassName("courses-parag");
    var coursesAvatar = document.getElementsByClassName("courses-avatar");

    var mobileContainer = document.getElementById("courses-container-mobile");
    var desktopContainer = document.getElementById("courses-container-desktop");

    function changeCourse(newIndex) {


      console.log(currentIndex);

      currentIndex = currentIndex + newIndex;


      if (currentIndex > courses.length - 1) {
        currentIndex = 0;
      }
      else if (currentIndex < 0) {
        currentIndex = courses.length - 1;
      }

      coursesImageMobile.src = courses[currentIndex].image;
      coursesDateMobile.innerHTML = courses[currentIndex].date
      coursesTitleMobile.innerHTML = courses[currentIndex].title;
      coursesParagrafMobile.innerHTML = courses[currentIndex].description;
      coursesAvatarMobile.src = courses[currentIndex].avatarurl;
    }

    leftButtonCourses.addEventListener("click", function () {
      changeCourse(-1);
    });
    rightButtonCourses.addEventListener("click", function () {
      changeCourse(+1);
    });

    let windowSize = '';

    window.addEventListener("resize", function () {
      if (window.innerWidth < 992) {
        windowSize = 'mobile';
        // container desktop style display none
        // container mobile style display block/flex
        desktopContainer.style.display = "none";
        mobileContainer.style.display = "flex";
        applyData(0, 0);
      }
      else {
        windowSize = 'desktop';
        desktopContainer.style.display = "flex";
        mobileContainer.style.display = "none";
        applyData(0, 0);
      }
    });


    let courseContainers = [0, 1, 2];

    function changeIndexes(newIndex, givenIndex) {

      givenIndex = givenIndex + newIndex;


      if (givenIndex > courses.length - 1) {
        givenIndex = 0;
      }
      else if (givenIndex < 0) {
        givenIndex = courses.length - 1;
      }
      return givenIndex;

    }

    let applyData = function (pos, obj) {
      if (window.innerWidth > 992) {
        coursesImage[pos].src = courses[obj].image;
        coursesDate[pos].innerHTML = courses[obj].date
        coursesTitle[pos].innerHTML = courses[obj].title;
        coursesParagraf[pos].innerHTML = courses[obj].description;
        coursesAvatar[pos].src = courses[obj].avatarurl;
      }
      else {

      }
    }

    rightButtonCourses.addEventListener("click", function () {
      for (let i = 0; i < courseContainers.length; i++) {
        courseContainers[i] = changeIndexes(+1, courseContainers[i]);
        applyData(i, courseContainers[i]);
      }
      console.log(courseContainers);
    })

    leftButtonCourses.addEventListener('click', function () {
      for (let i = 0; i < courseContainers.length; i++) {
        courseContainers[i] = changeIndexes(-1, courseContainers[i]);
        applyData(i, courseContainers[i]);
      }
      console.log(courseContainers);

    })

  })