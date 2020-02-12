function main() {
    //Izvlacimo strelice iz HTMLa
    let left = document.getElementById('strelica-levo');
    let right = document.getElementById('strelica-desno');
    //Izvlacimo sliku u slideru iz HTMLa
    let slider = document.getElementById('image');
    //Izvlacimo Heading u slideru
    let heading = document.getElementById('sliderHeading');
    //Izvlacimo Paragraf u slideru
    let paragraf = document.getElementById('sliderParagraf');

    //Pravimo niz sa 3 objekta u kome uzimamo posebnu sliku, poseban heading, poseban paragraf
    let slike = [
    {
        slikaUrl: 'images/slider-image1.jpg',
        slikaH1: 'Neki tekst za h1',
        slikaP: 'Neki tekst za p1'
    },
    {
        slikaUrl: 'images/slider-image2.jpg',
        slikaH1: 'Neki tekst za h2',
        slikaP: 'Neki tekst za p2'
    },
    {
        slikaUrl: 'images/slider-image3.jpg',
        slikaH1: 'Neki tekst za h3',
        slikaP: 'Neki tekst za p3'
    }
    ];
    //Pravimo default vrednost indexa da bude 0
    let sliderIndex = 0;
    //Pravimo Event da kada se klikne uradi nesto
    left.addEventListener('click', function() {
        //Ako je index 0 onda da stavi da sliderIndex bude poslednji broj u arrayu u ovom slucaju 2
        if(sliderIndex === 0) {
            sliderIndex = slike.length - 1;
            //Oduzima za 1, u ovom slucaju bice 1
        } else {
            sliderIndex -= 1;
        }
        //Zovemo funkciju koja ce da prikaze sliku, heading i paragraf na osnovu broja indeksa
        prikaziSliku();

    });
    right.addEventListener('click', function() {
        if(sliderIndex === slike.length - 1) {
            sliderIndex = 0;
        } else {
            sliderIndex += 1;
        }
        //Zovemo funkciju koja ce da prikaze sliku, heading i paragraf na osnovu broja indeksa
        prikaziSliku();


    })
    //Pravimo funckiju koja ce da sama gleda indeks
    let prikaziSliku = function() {
        //Stavlja heading na osnovu broja indeksa
        heading.textContent = slike.slikaH1;
        //Stavlja paragraf na osnovu broja indeksa
        paragraf.textContent = slike.slikaP;
        //Prikazuje sliku na osnovu broja indeksa
        slider.setAttribute('src', slike[sliderIndex].slikaUrl);
    };



    
    

};
main();