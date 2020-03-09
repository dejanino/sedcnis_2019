/*let photos = [{
    image: "images/courses-image1.jpg",  
},
{
    image: "images/courses-image2.jpg",  
},
{
    image: "images/courses-image3.jpg",  
},
{
    image: "images/courses-image4.jpg",  
},
{
    image: "images/courses-image5.jpg",  
},
{
    image: "images/courses-image1.jpg",  
},
{
    image: "images/courses-image2.jpg",  
},
{
    image: "images/courses-image3.jpg",  
}];*/

let request = new Request('http://pushadmin.dropmind.com/api/reviews', {method: 'GET'});

fetch(request)
.then(function(response){
	if (response.ok) {
		return response.json();
	}
	else {
		throw 'Respose nije ok';
	}
})
.then(function(objekat){
    console.log(objekat);
    reviewLogic(objekat);
})
.catch(function(greska){
	console.log('Greska!', greska);
});

function reviewLogic(photos){

    let currentInd = 0;
    let levo = document.getElementById("levo-courses");
    let desno = document.getElementById("desno-courses");
    let mobilePhoto = document.getElementsByClassName("photo-mobile");
    let desktopPhotos = document.getElementsByClassName("photo-desktop");


    function changePhoto(index){
        currentInd = currentInd + index; 

        if (currentInd > photos.length -1){
            currentInd = +1;
        }

        else if (currentInd < 0){
            currentInd = photos.length - 1;
        }

        if (window.innerWidth <= 992){
            //logika za mobilnu tj. prikazan je samo jedan item
            mobilePhoto[0].src = photos[currentInd].imageurl
        }
        else{
            // logika za desktop tj. prikazano je 3 item-a

            desktopPhotos[0].src = photos[currentInd].imageurl;
            if (currentInd === photos.length - 2){
                desktopPhotos[2].src = photos[0].imageurl;
            }
            else if (currentInd === photos.length - 1){
                desktopPhotos[1].src = photos[0].imageurl;
                desktopPhotos[2].src = photos[1].imageurl;
            }
            else{
                desktopPhotos[1].src = photos[currentInd + 1].imageurl;
                desktopPhotos[2].src = photos[currentInd + 2].imageurl;
            }
        }
        console.log(currentInd);
    }; 
    levo.addEventListener("click", function(){
        changePhoto(-1);
    }); 
    desno.addEventListener("click", function(){ 
        changePhoto(+1);
    });
}


/*.then(function(object){
    console.log(object);
    let palceholderDiv = document.getElementById("placehlderDiv");
    let markup = "";
    markup += `
    <div class="person"> 
        <h2>
             ${element.name}
        <h2>
        <p class="">${element.slogan}</p>
        <img class="" src='${element.avanturaurl}' />
    <div>
    `;
}*/
