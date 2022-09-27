window.onload = function() {
    
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    function letterNumberValidation (text) {
        for (let i = 0; i < text.length; i++) {
            if ((text.codePointAt(i) >= 48 && text.codePointAt(i) <= 57) 
            || (text.codePointAt(i) >= 65 && text.codePointAt(i) <= 90) 
            || (text.codePointAt(i) >= 97 && text.codePointAt(i) <= 122)){
            }else{
                return false;
            };
        };
        return true;
    };

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
        if(document.querySelector('.paragraphOne')) {
        document.querySelector(".paragraphOne").remove();
        };
    };

    var password = document.getElementById('password');

    password.onblur = function() {
        if(!letterNumberValidation(password.value)){
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
        if(document.querySelector('.paragraphTwo')) {
        document.querySelector(".paragraphTwo").remove();
        };
    };

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