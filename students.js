var studentsRewiews = [
  {
    image: "images/tst-image1.jpg",
    name: "aaaaaaaaa",
    profession: "aaaaaaaaa",
    description: "aaaaaaaaaaaaaaaaaaaaaaaa",
    stars: "images/author-image1.jpg",
  },
  {
    image: "images/tst-image2.jpg",
    name: "bbbbbbbbbb",
    profession: "bbbbbbbb",
    description: "bbbbbbb",
    stars: "images/author-image1.jpg",
  },
  {
    image: "images/tst-image3.jpg",
    name: "ccccccc",
    profession: "ccccccccc",
    description: "cccccccc",
    stars: "images/author-image1.jpg",
  },
  {
    image: "images/tst-image4.jpg",
    name: "ddddddddd",
    profession: "ddddd",
    description: "addddddd",
    stars: "images/author-image1.jpg",
  },
  {
    image: "images/tst-image1.jpg",
    name: "eeeeeee",
    profession: "eeeeeeeee",
    description: "aeeeeeeee",
    stars: "images/author-image1.jpg",
  },
  {
    image: "images/tst-image2.jpg",
    name: "fffffffff",
    profession: "ffffffff",
    description: "fffffffff",
    stars: "images/author-image1.jpg",
  },

];

var reviewsImage = document.getElementById("reviews-img");
var reviewsName = document.getElementById("reviews-name");
var reviewsProfession = document.getElementById("reviews-profesion");
var reviewsDescription = document.getElementById("reviews-description");
//var reviewsStars = document.getElementById("reviews-img");

let klikDugme = function (i) {
  // studentsRewiews[i] = niz[i];

  reviewsImage.src = studentsRewiews[i].image;
  reviewsName.innerHTML = studentsRewiews[i].name
  reviewsProfession.innerHTML = studentsRewiews[i].profession;
  reviewsDescription.innerHTML = studentsRewiews[i].description;
  // coursesAvatar[pos].src = courses[obj].authorImage;
  console.log(i);
}

studentsRewiews.forEach(function (element, index) {
  let parent = document.getElementById('parent');
  let kruzic = document.createElement('a');

  kruzic.setAttribute("class", "dot");
  kruzic.setAttribute("href", "javascript:;");
  kruzic.style.fontSize = "27px";
  kruzic.innerHTML = '<i class="fas fa-dot-circle"></i>';
  parent.appendChild(kruzic);
  kruzic.addEventListener('click', function () { klikDugme(index) });

  let divZaHover = document.getElementById('image-div');
  let slikaZaHover = document.getElementById('hover-img');

  kruzic.addEventListener('mouseover', function (event) {

    slikaZaHover.src = studentsRewiews[index].image;
    divZaHover.classList.add('style');
    console.log(event);
    //let koordX = event.clientX - 50;
    //let koordY = event.clientY - 150;
    let pozicijaKruzica = kruzic.getBoundingClientRect();
    let koordX = pozicijaKruzica.left - 50 + 27;
    let koordY = pozicijaKruzica.top - 108;
    console.log(koordX, koordY);
    divZaHover.style.top = koordY + 'px';
    divZaHover.style.left = koordX + 'px';
    //slikaZaHover.style.display
  })

  kruzic.addEventListener('mouseout', function () {
    divZaHover.classList.remove('style');
    console.log('mouseout se trigeruje');
  })
})


