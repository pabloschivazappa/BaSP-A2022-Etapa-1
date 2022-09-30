window.onload = function() {

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    function letterValidation(text){
        var itsLetter = true;
        for (var i = 0; i < text.length; i++) {
            var lowerCase = text[i].toLowerCase();
            var upperCase = text[i].toUpperCase();
            if (lowerCase == upperCase){
                if (text[i] == " "){
                    continue;
                };
                itsLetter = false;
                break;
            };
        };
        return itsLetter;
    };

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

    function letterNumberSpaceValidation (text) {
        for (let i = 0; i < text.length; i++) {
            if ((text.codePointAt(i) >= 48 && text.codePointAt(i) <= 57) 
            || (text.codePointAt(i) >= 65 && text.codePointAt(i) <= 90) 
            || (text.codePointAt(i) >= 97 && text.codePointAt(i) <= 122)
            || (text.codePointAt(i) === 32)){
            }else{
                return false;
            };
        };
        return true;
    };

    var firstName = document.getElementById('firstName');

    firstName.onblur = function() {
        if (firstName.value.length <= 3 || !letterValidation(firstName.value)) {
            firstName.classList.add('borderRed');
            var firstNameErrorMessage = document.createElement('p');
            firstNameErrorMessage.classList.add('paragraphOne');
            firstNameErrorMessage.innerHTML = 'It is required more than three letters';
            firstName.parentNode.insertBefore(firstNameErrorMessage, firstName.nextSibling);
        } else {
            firstName.classList.add('borderGreen');
        }
    };

    firstName.onfocus = function() {
        firstName.value = '';
        firstName.classList.remove('borderRed');
        if(document.querySelector('.paragraphOne')) {
        document.querySelector(".paragraphOne").remove();
        };
    };

    var surname = document.getElementById('surname');

    surname.onblur = function() {
        if (surname.value.length <= 3 || !letterValidation(surname.value)) {
            surname.classList.add('borderRed');
            var surnameErrorMessage = document.createElement('p');
            surnameErrorMessage.classList.add('paragraphTwo');
            surnameErrorMessage.innerHTML = 'It is required more than three letters';
            surname.parentNode.insertBefore(surnameErrorMessage, surname.nextSibling);
        } else {
            surname.classList.add('borderGreen');
        };
    };

    surname.onfocus = function() {
        surname.value = '';
        surname.classList.remove('borderRed');
        if(document.querySelector('.paragraphTwo')) {
        document.querySelector(".paragraphTwo").remove();
        };
    };

    var dni = document.getElementById('dni');

    dni.onblur = function() {
        if (dni.value.length <= 7 || isNaN(dni.value)) {
            dni.classList.add('borderRed');
            var dniErrorMessage = document.createElement('p');
            dniErrorMessage.classList.add('paragraphThree');
            dniErrorMessage.innerHTML = 'It is required seven or more numbers';
            dni.parentNode.insertBefore(dniErrorMessage, dni.nextSibling);
        } else {
            dni.classList.add('borderGreen');
        };
    };

    dni.onfocus = function() {
        dni.value = '';
        dni.classList.remove('borderRed');
        if(document.querySelector('.paragraphThree')) {
        document.querySelector(".paragraphThree").remove();
        };
    };

    var birthday = document.getElementById('birthday');

    birthday.onblur = function() {
        if (birthday.value == '') {
            birthday.classList.add('borderRed');
            var birthdayErrorMessage = document.createElement('p');
            birthdayErrorMessage.classList.add('paragraphFour');
            birthdayErrorMessage.innerHTML = 'This input is required';
            birthday.parentNode.insertBefore(birthdayErrorMessage, birthday.nextSibling);
        } else {
            birthday.classList.add('borderGreen');
        };
    };

    birthday.onfocus = function() {
        birthday.value = '';
        birthday.classList.remove('borderRed');
        if(document.querySelector('.paragraphFour')) {
        document.querySelector(".paragraphFour").remove();
        };
    };

    var phone = document.getElementById('phone');

    phone.onblur = function() {
        if (phone.value.length != 10 || isNaN(phone.value)) {
            phone.classList.add('borderRed');
            var phoneErrorMessage = document.createElement('p');
            phoneErrorMessage.classList.add('paragraphFour');
            phoneErrorMessage.innerHTML = 'It is required ten or more numbers';
            phone.parentNode.insertBefore(phoneErrorMessage, phone.nextSibling);
        } else {
            phone.classList.add('borderGreen');
        };
    };

    phone.onfocus = function() {
        phone.value = '';
        phone.classList.remove('borderRed');
        if(document.querySelector('.paragraphFour')) {
        document.querySelector(".paragraphFour").remove();
        };
    };

    var address = document.getElementById('address');

    address.onblur = function() {
        if (address.value.length < 5 || !letterNumberSpaceValidation(address.trim().value)) {
            address.classList.add('borderRed');
            var addressErrorMessage = document.createElement('p');
            addressErrorMessage.classList.add('paragraphFive');
            addressErrorMessage.innerHTML = 'It is required more than five characters';
            address.parentNode.insertBefore(addressErrorMessage, address.nextSibling);
        } else {
            address.classList.add('borderGreen');
        };
    };

    address.onfocus = function() {
        address.value = '';
        address.classList.remove('borderRed');
        if(document.querySelector('.paragraphFive')) {
        document.querySelector(".paragraphFive").remove();
        };
    };

    var location = document.getElementById('location');

    location.onblur = function() {
        if (location.value.length <= 3 || !letterNumberSpaceValidation(location.value)) {
            location.classList.add('borderRed');
            var locationErrorMessage = document.createElement('p');
            locationErrorMessage.classList.add('paragraphSix');
            locationErrorMessage.innerHTML = 'It is required more than five characters';
            location.parentNode.insertBefore(locationErrorMessage, location.nextSibling);
        } else {
            location.classList.add('borderGreen');
        };
    };

    location.onfocus = function() {
        location.value = '';
        location.classList.remove('borderRed');
        if(document.querySelector('.paragraphSix')) {
        document.querySelector(".paragraphSix").remove();
        };
    };

    var zipcode = document.getElementById('zipcode');

    zipcode.onblur = function() {
        if (zipcode.value.length < 4 || zipcode.value.length > 5 || isNaN(zipcode.value)) {
            zipcode.classList.add('borderRed');
            var zipcodeErrorMessage = document.createElement('p');
            zipcodeErrorMessage.classList.add('paragraphSeven');
            zipcodeErrorMessage.innerHTML = 'It is required between four and five numbers';
            zipcode.parentNode.insertBefore(zipcodeErrorMessage, zipcode.nextSibling);
        } else {
            zipcode.classList.add('borderGreen');
        };
    };

    zipcode.onfocus = function() {
        zipcode.value = '';
        zipcode.classList.remove('borderRed');
        if(document.querySelector('.paragraphSeven')) {
        document.querySelector(".paragraphSeven").remove();
        };
    };

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
        if(document.querySelector('.paragraphEight')) {
        document.querySelector(".paragraphEight").remove();
        };
    };

    var password = document.getElementById('password');

    password.onblur = function() {
        if (password.value.length < 8 || !letterNumberValidation(password.value)) {
            password.classList.add('borderRed');
            var passwordErrorMessage = document.createElement('p');
            passwordErrorMessage.classList.add('paragraphNine');
            passwordErrorMessage.innerHTML = 'It is required more than eight characters';
            password.parentNode.insertBefore(passwordErrorMessage, password.nextSibling);
        } else {
            password.classList.add('borderGreen');
        };
    };

    password.onfocus = function() {
        password.value = '';
        password.classList.remove('borderRed');
        if(document.querySelector('.paragraphNine')) {
        document.querySelector(".paragraphNine").remove();
        };
    };

    var repeatPassword = document.getElementById('repeatPassword');

    repeatPassword.onblur = function() {
        if (repeatPassword.value != password.value) {
            repeatPassword.classList.add('borderRed');
            var repeatPasswordErrorMessage = document.createElement('p');
            repeatPasswordErrorMessage.classList.add('paragraphTen');
            repeatPasswordErrorMessage.innerHTML = 'It is not matching with password';
            repeatPassword.parentNode.insertBefore(repeatPasswordErrorMessage, repeatPassword.nextSibling);
        } else {
            repeatPassword.classList.add('borderGreen');
        };
    };

    repeatPassword.onfocus = function() {
        repeatPassword.value = '';
        repeatPassword.classList.remove('borderRed');
        if(document.querySelector('.paragraphTen')) {
        document.querySelector(".paragraphTen").remove();
        };
    };

    var createButton = document.getElementById('createButton');

    createButton.onclick = function(e) {
        e.preventDefault();

        var year = birthday.value.substring(0, birthday.value.indexOf('-'));
            var month = birthday.value.substring(birthday.value.indexOf('-') + 1, birthday.value.indexOf('-') + 3);
            var day = birthday.value.substring(birthday.value.indexOf('-') + 4,  birthday.value.indexOf('-') 
            + birthday.value.length);
            var birthdayArray = [month, day, year];
            var newBirthday = birthdayArray.join('/');

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
            var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' + firstName.value + 
            "&lastName=" + lastName.value+ "&dni=" + dni.value + "&dob=" + newBirthday+ "&phone=" + phone.value + 
            "&address=" + address.value + "&city="+ location.value + "&zip=" + zipcode.value+ "&email=" + email.value + 
            "&password=" + password.value;

            fetch(url)
                .then(function(resp){
                    return resp.json();
                })
                .then(function(dataJson){
                    if (!dataJson.success){
                        throw new Error('Error: ')
                    }
                    alert(dataJson.msg + '\n' + 'Your first name is: ' + firstName.value + '\n' + 'Your surname is: ' 
                    + surname.value + '\n' + 'Your dni is: ' + dni.value + '\n' + 'Your phone is: ' + phone.value 
                    + '\n' + 'Your birthday is: ' + birthday.value + '\n' + 'Your address is: ' + address.value + 
                    '\n' + 'Your location is: ' + location.value + '\n' + 'Your zipcode is: ' + zipcode.value + 
                    '\n' + 'Your email is: ' + email.value + '\n' + 'Your password is: ' + password.value + 
                    '\n' + 'Success: ' + dataJson.success);
                })
                .catch(function(error){
                    alert(error)
                })
        };
    };
}