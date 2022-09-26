window.onload = function() {
    
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

// EMAIL

    var email = document.getElementById('email');

    email.onblur = function() {
        if (!email.value.match(emailExpression)) {
            email.classList.add('borderRed');
            var emailErrorMessage = document.createElement('p');
            emailErrorMessage.classList.add('paragraphOne');
            emailErrorMessage.innerHTML = 'This e-mail is not valid';
            email.parentNode.insertBefore(emailErrorMessage, email.nextSibling);
        } else {
            email.classList.add('borderGreen');
        };
    };

    email.onfocus = function() {
        email.value = '';
        email.classList.remove('borderRed');
        document.querySelector(".paragraphOne").remove();
    };
        
// PASSWORD

    var password = document.getElementById('password');
    var passwordExpression = /^[A-Za-z0-9]*$/;

    password.onblur = function() {
        if(!password.value.match(passwordExpression) || password.value == ''){
            password.classList.add('borderRed');
            var passwordErrorMessage = document.createElement('p');
            passwordErrorMessage.classList.add('paragraphTwo');
            passwordErrorMessage.innerHTML = 'This password is not valid';
            password.parentNode.insertBefore(passwordErrorMessage, password.nextSibling);
        } else {
            password.classList.add('borderGreen');
        };
    };

    password.onfocus = function() {
        password.value = '';
        password.classList.remove('borderRed');
        document.querySelector(".paragraphTwo").remove();
    };

// LOGIN BUTTON

    var loginButton = document.getElementById('loginButton');

    loginButton.onclick = function(e) {
        e.preventDefault();

        if(email.classList.contains('borderRed') && password.classList.contains('borderRed')) {
            alert('Your email and password are not valids');
        } else if (email.classList.contains('borderRed')) {
            alert('Your email is not valid');
        } else if (password.classList.contains('borderRed')) {
            alert('Your password is not valid');  
        } else if (email.value == '' && password.value == '') {
            alert('Email and Password inputs are empty');
        } else if (email.value == '') {
            alert('Email input is empty');
        } else if (password.value == '') {
            alert('Password input is empty');
        } else {
            alert('Your mail is: ' + email.value + '\n' + 'Your password is: ' + password.value);
        };
    };
}