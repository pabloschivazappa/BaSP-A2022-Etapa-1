window.onload = function() {

    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'Y', 'J', 'K', 'L', 'M', 'N', 
    'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

// FIRST NAME

    var firstName = document.getElementById('firstName');

    firstName.onblur = function() {
        if (firstName.value.length <= 3) {
            firstName.classList.add('borderRed');
            var firstNameErrorMessage = document.createElement('p');
            firstNameErrorMessage.classList.add('paragraphOne');
            firstNameErrorMessage.innerHTML = 'This first name is not valid';
            firstName.parentNode.insertBefore(firstNameErrorMessage, firstName.nextSibling);
        }
        else {
            firstName.classList.add('borderGreen');
        }
    };

    firstName.onfocus = function() {
        firstName.value = '';
        firstName.classList.remove('borderRed');
        document.querySelector(".paragraphOne").remove();
    };

// SURNAME

    var surname = document.getElementById('surname');

    surname.onblur = function() {
        if (surname.value.length <= 3) {
            surname.classList.add('borderRed');
            var surnameErrorMessage = document.createElement('p');
            surnameErrorMessage.classList.add('paragraphTwo');
            surnameErrorMessage.innerHTML = 'This surname is not valid';
            surname.parentNode.insertBefore(surnameErrorMessage, surname.nextSibling);
        }
        else {
            surname.classList.add('borderGreen');
        }
    };

    surname.onfocus = function() {
        surname.value = '';
        surname.classList.remove('borderRed');
        document.querySelector(".paragraphTwo").remove();
    };

// DNI

    var dni = document.getElementById('dni');

    dni.onblur = function() {
        if (dni.value.length <= 7) {
            dni.classList.add('borderRed');
            var dniErrorMessage = document.createElement('p');
            dniErrorMessage.classList.add('paragraphThree');
            dniErrorMessage.innerHTML = 'This DNI is not valid';
            dni.parentNode.insertBefore(dniErrorMessage, dni.nextSibling);
        }
        else {
            dni.classList.add('borderGreen');
        }
    };

    dni.onfocus = function() {
        dni.value = '';
        dni.classList.remove('borderRed');
        document.querySelector(".paragraphThree").remove();
    };

//BIRTHDAY

    var birthday = document.getElementById('birthday');

    birthday.onblur = function() {
        if (birthday.value == '') {
            birthday.classList.add('borderRed');
            var birthdayErrorMessage = document.createElement('p');
            birthdayErrorMessage.classList.add('paragraphFour');
            birthdayErrorMessage.innerHTML = 'This birthday is not valid';
            birthday.parentNode.insertBefore(birthdayErrorMessage, birthday.nextSibling);
        }
        else {
            birthday.classList.add('borderGreen');
        }
    };

    birthday.onfocus = function() {
        birthday.value = '';
        birthday.classList.remove('borderRed');
        document.querySelector(".paragraphFour").remove();
    };

//PHONE

    var phone = document.getElementById('phone');

    phone.onblur = function() {
        if (phone.value.length != 10) {
            phone.classList.add('borderRed');
            var phoneErrorMessage = document.createElement('p');
            phoneErrorMessage.classList.add('paragraphFour');
            phoneErrorMessage.innerHTML = 'This phone numer is not valid';
            phone.parentNode.insertBefore(phoneErrorMessage, phone.nextSibling);
        }
        else {
            phone.classList.add('borderGreen');
        }
    };

    phone.onfocus = function() {
        phone.value = '';
        phone.classList.remove('borderRed');
        document.querySelector(".paragraphFour").remove();
    };

// ADDRESS

    var address = document.getElementById('address');

    address.onblur = function() {
        if (address.value.length < 5) {
            address.classList.add('borderRed');
            var addressErrorMessage = document.createElement('p');
            addressErrorMessage.classList.add('paragraphFive');
            addressErrorMessage.innerHTML = 'This address is not valid';
            address.parentNode.insertBefore(addressErrorMessage, address.nextSibling);
        }
        else {
            address.classList.add('borderGreen');
        }
    };

    address.onfocus = function() {
        address.value = '';
        address.classList.remove('borderRed');
        document.querySelector(".paragraphFive").remove();
    };

// LOCATION

    var location = document.getElementById('location');

    location.onblur = function() {
        if (location.value.length <= 3) {
            location.classList.add('borderRed');
            var locationErrorMessage = document.createElement('p');
            locationErrorMessage.classList.add('paragraphSix');
            locationErrorMessage.innerHTML = 'This location is not valid';
            location.parentNode.insertBefore(locationErrorMessage, location.nextSibling);
        }
        else {
            location.classList.add('borderGreen');
        }
    };

    location.onfocus = function() {
        location.value = '';
        location.classList.remove('borderRed');
        document.querySelector(".paragraphSix").remove();
    };

// ZIPCODE

    var zipcode = document.getElementById('zipcode');

    zipcode.onblur = function() {
        if (zipcode.value.length < 4 || zipcode.value.length > 5) {
            zipcode.classList.add('borderRed');
            var zipcodeErrorMessage = document.createElement('p');
            zipcodeErrorMessage.classList.add('paragraphSeven');
            zipcodeErrorMessage.innerHTML = 'This zipcode numer is not valid';
            zipcode.parentNode.insertBefore(zipcodeErrorMessage, zipcode.nextSibling);
        }
        else {
            zipcode.classList.add('borderGreen');
        }
    };

    zipcode.onfocus = function() {
        zipcode.value = '';
        zipcode.classList.remove('borderRed');
        document.querySelector(".paragraphSeven").remove();
    };

// EMAIL

    var email = document.getElementById('email');

    email.onblur = function() {
        if (!email.value.match(emailExpression)) {
            email.classList.add('borderRed');
            var emailErrorMessage = document.createElement('p');
            emailErrorMessage.classList.add('paragraphEight');
            emailErrorMessage.innerHTML = 'This e-mail is not valid';
            email.parentNode.insertBefore(emailErrorMessage, email.nextSibling);
        } else {
            email.classList.add('borderGreen');
        };
    };

    email.onfocus = function() {
        email.value = '';
        email.classList.remove('borderRed');
        document.querySelector(".paragraphEight").remove();
    };

// PASSWORD

    var password = document.getElementById('password');

    password.onblur = function() {
        if (password.value.length < 8) {
            password.classList.add('borderRed');
            var passwordErrorMessage = document.createElement('p');
            passwordErrorMessage.classList.add('paragraphNine');
            passwordErrorMessage.innerHTML = 'This password is not valid';
            password.parentNode.insertBefore(passwordErrorMessage, password.nextSibling);
        }
        else {
            password.classList.add('borderGreen');
        }
    };

    password.onfocus = function() {
        password.value = '';
        password.classList.remove('borderRed');
        document.querySelector(".paragraphNine").remove();
    };

//REPEAT PASSWORD

    var repeatPassword = document.getElementById('repeatPassword');

    repeatPassword.onblur = function() {
        if (repeatPassword.value.length < 8) {
            repeatPassword.classList.add('borderRed');
            var repeatPasswordErrorMessage = document.createElement('p');
            repeatPasswordErrorMessage.classList.add('paragraphTen');
            repeatPasswordErrorMessage.innerHTML = 'This Password is not valid';
            repeatPassword.parentNode.insertBefore(repeatPasswordErrorMessage, repeatPassword.nextSibling);
        }
        else {
            repeatPassword.classList.add('borderGreen');
        }
    };

    repeatPassword.onfocus = function() {
        repeatPassword.value = '';
        repeatPassword.classList.remove('borderRed');
        document.querySelector(".paragraphTen").remove();
    };

// SIGN UP BUTTON

    var createButton = document.getElementById('createButton');

    createButton.onclick = function(e) {
        e.preventDefault();

        if(firstName.classList.contains('borderRed') || surname.classList.contains('borderRed') || 
        dni.classList.contains('borderRed') || phone.classList.contains('borderRed') || 
        address.classList.contains('borderRed') || location.classList.contains('borderRed') || 
        zipcode.classList.contains('borderRed') || email.classList.contains('borderRed') || 
        password.classList.contains('borderRed') || repeatPassword.classList.contains('borderRed')) {
            alert('One or more inputs are not valids');
        } else if (firstName.value == '' || surname.value == '' || dni.value == '' || phone.value == '' || 
        address.value == '' || location.value == '' || zipcode.value == '' || email.value == '' || 
        password.value == '' || repeatPassword.value == '') {
            alert('One or more inputs are empty');
        } else {
            alert('Your first name is: ' + firstName.value + '\n' + 'Your surname is: ' + surname.value + '\n' + 
            'Your dni is: ' + dni.value + '\n' + 'Your phone is: ' + phone.value + '\n' + 'Your birthday is: ' + 
            birthday.value + '\n' + 'Your address is: ' + address.value + '\n' + 'Your location is: ' + 
            location.value + '\n' + 'Your zipcode is: ' + zipcode.value + '\n' + 'Your email is: ' + email.value + 
            '\n' + 'Your password is: ' + password.value);
        };
    };
}