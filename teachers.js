let teachers;
let markup = "";
let placeHolderDivTeachers = document.getElementById('teachers-container');

let request4 = new Request("http://pushadmin.dropmind.com/api/teachers");
fetch(request4)
  .then(function (response) {
    console.log(response);
    if (response.ok) {
      return response.json()
    }
    else {
      alert('Error')
    }
  })
  .then(function (object) {
    console.log(object);
    teachers = object;

    teachers.forEach(element => {
      // debugger;
      markup += `
    <div class="teacher">
    <div class="teachers-image">
        <img src=${element.avatarurl} alt="image" />
    </div>
    <div class="teachers-text">
        <h2 class="teachers-heading">${element.name}</h2>
        <p class="teachers-paragraph">${element.slogan}</p>
    </div>
    <div class="teachers-icons">
        <a class="teacher-icon" href="#"><i class="fab fa-facebook-square"></i></a>
        <a class="teacher-icon" href="#"><i class="fab fa-twitter"></i></a>
        <a class="teacher-icon" href="#"><i class="fab fa-instagram"></i></a>
    </div>
</div> `


    });
    console.log(markup);
    placeHolderDivTeachers.innerHTML = markup;
  })

