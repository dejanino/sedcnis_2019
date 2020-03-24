
let mainUp = function(){
    let userName = document.querySelector('#name');
    // console.log(userName);
    let userEmail = document.querySelector('#email');
    // console.log(userEmail);
    let userPassword = document.querySelector('#pw');
    // console.log(userPassword);
    let singUpButton = document.querySelector('.signup-form-submit');
    // console.log(singUpButton);

    let fullName = document.querySelector('#fullName');
    // console.log(fullName);
    let fullEmail = document.querySelector('#fullEmail');
    // console.log(fullEmail);
    let txtArea = document.querySelector('#txtArea');
    // console.log(txtArea);
    let submitButton = document.querySelector('.contact-form-submit');
    // console.log(submitButton);

    let newslEmail = document.querySelector('.newsl-email');
    // console.log(newslEmail);
    let newslButton = document.querySelector('.newsl-submit');
    // console.log(newslButton);


    let emailObject = {
        name : '',
        emailAdress : '',
        message : '',
        password : '',
        type : ''
    }

    function validateAndSubmit (name, emailAdress, message, password, type){
        this.name = name;
        this.emailAdress = emailAdress;
        this.message = message;
        this.password = password;
        this.type = type;

        if(type === 'signup'){
            let checkName = name && name !=='';
            let checkEmail = isEmailValid(emailAdress);
            let checkPassword = password && password !=='';
        
            if (checkName && checkEmail && checkPassword){
                sendEmail(name,emailAdress,password,type);
            }
        }else if (type === 'contactus'){
            let checkName = name && name !=='';
            let checkEmail = isEmailValid(emailAdress);
            let checkMessage = message && message !== '';

            if (checkName && checkEmail && checkMessage){
                sendEmail(name,emailAdress,message,type);
            }

        }else if (type === 'newsletter'){
            let checkEmail = isEmailValid(emailAdress);
            if(checkEmail){
                sendEmail(name,emailAdress,message,type);
            }
        }
        else {
            alert('greska')
        }
    }
   

    singUpButton.addEventListener('click', function (event){
        validateAndSubmit(userName.value,userEmail.value,'',userPassword.value,'signup');
        event.preventDefault;
    });

    submitButton.addEventListener('click', function(){
        validateAndSubmit(fullName.value,fullEmail.value,txtArea.value,'','contactus');
    });

    newslButton.addEventListener('click', function(){
        validateAndSubmit('',newslEmail.value,'', '', 'newsletter');
    });

    function sendEmail (name,email, message,type){
        
        const formData = {
            'Name': name,
            'EmailAddress': email,
            'Message': message,
            'Type' : type
        }

        let request = new Request('http://xercontrol.com/api/contactus', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }

        });

        fetch(request)
        .then(function(response){
            if(response.ok){
                alert('Poslat mail');
            }else {
                alert('Mail nece biti poslat');
            }
        })
        .catch(function(error){
            console.log('Greska',error);
        });
    }

    function isEmailValid (email){
        const regex =  /(.+)@(.+){2,}\.(.+){2,}/; // string pre @, string sa najmanje 2, karaktera zatim tacka i na kraju opet string sa najmanje 2 karaktera
        let baseValid = email && email != '';
        let isValid = baseValid && regex.test(email);
        return isValid;
    }

   
}

mainUp();