window.onload = function() {
    
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    function letterValidation (text) {
        text.toLowerCase()
        for (let i = 0; i < text.length; i++) {
            if ((text.codePointAt(i) >= 65 && text.codePointAt(i) <= 90) 
            || (text.codePointAt(i) >= 97 && text.codePointAt(i) <= 122)){
            }else{
                return false;
            };
        };
        return true;
    };

    function numberValidation (text) {
        for (let i = 0; i < text.length; i++) {
            if ((text.codePointAt(i) >= 48 && text.codePointAt(i) <= 57)){
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
        if(letterValidation(password.value) || numberValidation(password.value) || password.value.length <= 8){
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

        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + email.value + 
        '&password=' + password.value;

        fetch(url)
        .then(function(resp){
            return resp.json();
        })
        .then(function(dataJson){
            if (dataJson.success){
                var dataJsonSuccess = [];
                for (var keyData in dataJson.data) {
                    dataJsonSuccess += ('\n' + keyData + ': ' + dataJson.data[keyData])
                }
                alert(dataJson.success + '\n' + dataJson.msg + dataJsonSuccess)
            } else {
                throw new Error (dataJson.msg + '\n' + 'Success: ' + dataJson.success);
            };
        })
        .catch(function(error){
            alert(error);
        })
    };
}