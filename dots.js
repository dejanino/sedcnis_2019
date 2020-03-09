let forThumbnail = [{imageStudents:"images/tst-image1.jpg",nameStudents:"Jackson",jobStudents:"Pekar"},             
                     {imageStudents:"images/tst-image2.jpg",nameStudents:"Pera",jobStudents:"Lekar"},
                     {imageStudents:"images/tst-image3.jpg",nameStudents:"Mika",jobStudents:"Apotekar"},
                     {imageStudents:"images/tst-image4.jpg",nameStudents:"Zika",jobStudents:"Apotekar"}];

let studentPicture = document.getElementById('img');
let imeStudenta = document.getElementById('ime');
let zanimanjeStudenta = document.getElementById('zanimanje');
let parent = document.getElementById('parent');
forThumbnail.forEach(function(elementContent, index){
    console.log(elementContent, index)
    
    let anchor1 = document.createElement('a');
    anchor1.setAttribute("class", "dot");
    anchor1.setAttribute("href", "javascript:;");
    anchor1.style.fontSize = "20px";
    anchor1.innerHTML = "<i class='fa'>&#xf192;</i>";
    parent.appendChild(anchor1);
    forThumbnail[index].index = index;
    /*forThumbnail[index].idKojiSamJaOnakoNpr = "dot-" + index;
    forThumbnail[index].url = "/review-" + index;*/
    
    anchor1.addEventListener('click', function(){
        studentPicture.src = forThumbnail[index].imageStudents;
        imeStudenta.textContent = forThumbnail[index].nameStudents;
        zanimanjeStudenta.textContent = forThumbnail[index].jobStudents;
    });

    let slicica = document.createElement('div');
    slicica.setAttribute("class", "popslika");
    let slika = document.createElement("img");
    slika.setAttribute("id", "photo"); 

    slicica.style.width = '100px';
    slicica.style.height = '100px';
     
    slicica.style.top = "-120px";
    slicica.style.left = "-30px";  
    
    anchor1.appendChild(slicica);
    slicica.appendChild(slika);
    

    anchor1.addEventListener("mouseover", mouseOver);
    function mouseOver(){
        slika.src = forThumbnail[index].imageStudents;
        slicica.style.display = "block";
       
    };
        
    anchor1.addEventListener('mouseout', mouseOut);
    function mouseOut(){
        slicica.style.display = "none";
    };
    

});

