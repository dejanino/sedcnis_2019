let btnSend = document.getElementById("btn-send");

btnSend.addEventListener('click', function(){
	collectAndValidate();
});

function collectAndValidate(){
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let message = document.getElementById("message").value;

	let isNameValid = name && name != '';
	let isMessageValid = message && message != '';

	if (isNameValid && isEmailValid(email) && isMessageValid){
		sendEmail(name, email, message);
	}
	else {
		alert('nevalidni podaci');
	}
}

function isEmailValid(email) {
	const regex = /(.+)@(.+){2,}\.(.+){2,}/; // string pre @, string sa najmanje 2, karaktera zatim tacka i na kraju opet string sa najmanje 2 karaktera
	let baseValid = email && email != '';
	let isValid = baseValid && regex.test(email);
	return isValid;
}

function sendEmail(name, email, message) {
	const formData = {
	  'Name': name,
	  'EmailAddress': email,
	  'Message': message
	}
  
	let request = new Request('http://xercontrol.com/api/contactus', {
	  method: 'POST',
	  body: JSON.stringify(formData),
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