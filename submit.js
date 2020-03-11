// //Signup today
// var signFullName = document.getElementById("name");
// var signEmail = document.getElementById("email");
// var signpassword = document.getElementById("pm");
// var signSubmitButton = document.querySelector(".signup-form-submit");

// signSubmitButton.addEventListener("click", function () {
//   event.preventDefault()
//   if (signFullName.value === '') {
//     alert("Niste uneli nista u polje")
//   };
// });

// //Contact us
// var contactFullName = document.getElementById("fullName");
// var contactEmail = document.getElementById("fullEmail");
// var contactPassword = document.getElementById("text");
// var contactSubmitButton = document.querySelector(".contact-form-submit");

// contactSubmitButton.addEventListener('click', function () {
//   if (contactFullName.value === '') {
//     alert("Niste uneli nista u polje")
//   };
//   else if
// });

// function sendEmail(name, email, massage) {
//   const formData = {
//     'Name': name,
//     'EmailAddress': email,
//     'Massage': message
//   }

//   let request = new Request('http://xercontrol.com/api/contacus'{

//   })
// }

let btnSignup = document.querySelector(".signup-form-submit");
let btnContact = document.querySelector(".contact-form-submit");
let btnNewsl = document.querySelector(".newsl-submit");



let emailObject = {
  Name: '',
  EmailAddress: '',
  Message: '',
  Password: '',
  Type: ''
}

btnSignup.addEventListener('click', function (event) {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pw").value;

  collectAndValidate("signup", email, name, '', password);
  event.preventDefault()

});
btnContact.addEventListener('click', function () {
  let name = document.getElementById("fullName").value;
  let email = document.getElementById("fullEmail").value;
  let message = document.getElementById("text").value;

  collectAndValidate("contactus", email, name, message);
});
btnNewsl.addEventListener('click', function () {
  let email = document.getElementById("newsl-email").value;

  collectAndValidate("newsletter", email);
});

function collectAndValidate(formName, email, name = '', message = '', password = '') {

  emailObject.EmailAddress = email;
  emailObject.Name = name;
  emailObject.Password = password;
  emailObject.Message = message;
  emailObject.Type = formName;

  if (formName === "newsletter") {
    let isMailValid = isEmailValid(email);
    if (isMailValid) {
      sendEmail();
    }
  }
  else if (formName === "contactus") {
    let isMailValid = isEmailValid(email);
    let isNameValid = name + name != '';
    let isMessageValid = message + message != '';

    if (isNameValid && isMailValid && isMessageValid) {
      sendEmail();
    }
  }
  else if (formName === "signup") {
    let isMailValid = isEmailValid(email);
    let isNameValid = name + name != '';
    let isPasswortid = password + password != '';

    if (isNameValid && isMailValid && isPasswortid) {
      sendEmail();
    }
  }

  else {
    alert('nevalidni podaci');
  }

}

function isEmailValid(email) {
  if (email) {
    const regex = /(.+)@(.+){2,}\.(.+){2,}/; // string pre @, string sa najmanje 2, karaktera zatim tacka i na kraju opet string sa najmanje 2 karaktera
    let baseValid = email && email != '';
    let isValid = baseValid && regex.test(email);
    return isValid;
  } else {
    alert("Niste uneli mejl")
  }
}

function sendEmail() {

  let request = new Request('http://xercontrol.com/api/contactus', {
    method: 'POST',
    body: JSON.stringify(emailObject),
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