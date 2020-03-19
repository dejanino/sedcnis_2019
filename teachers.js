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

let imagePrefix = 'http://pushadmin.dropmind.com/';

teachers.forEach(function (element,index){
    console.log(teachers);
     console.log(teachers[0]);

     imagesTeachers.src = imagePrefix + teachers[index].avatarurl;
     nameTeachers.textContent = teachers[index].name;
     sloganTeachers.textContent = teachers[index].slogan;

    // teacherDetails(index);
});



// let teacherDetails = function (index){
//     console.log(index);
//     imagesTeachers.src = teachers[index].avatarurl;
//     nameTeachers.textContent = teachers[index].name;
// }


}





};

main();

