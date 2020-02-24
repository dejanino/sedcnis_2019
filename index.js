let slider = [{
    image: 'slider-image1',
    title: 'Distance Learning Education Center',
    description: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
    url: 'Discover more',
},
{
    image: 'slider-image2',
    title: 'Start your journey with our practical courses',
    url: 'Take a cours'
},
{
    image: 'slider-image3',
    title: 'Efficient learning methods',
    url: 'Let\'s chat'
}];
let curentIndex = 0;
/* ide if funkcija koja proverava da li pomeramo u levo 
ili desno tj gleda vrednost pravca koja ce da bude levo 
ili desno ako je desno povecavano indeks i a u levo 
smanjujemo pritom moramo da i uporedjujemo da duzinom niza 
jer nesme da bude veci od kolicine elemenata koju imamo
ako predje kolicinu moramo da ga resetujemo na 0 da bi poceo 
da vrti ponovo isto vazi i za minus ako ode manje od 0 
resetujemoo ga na najveci index */