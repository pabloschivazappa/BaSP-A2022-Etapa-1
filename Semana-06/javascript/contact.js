window.onload = function() {

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    function letterValidation (text) {
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

    var name = document.getElementById('name');

    name.onblur = function() {
        if (name.value.length <= 3 || !letterValidation(name.value)) {
            name.classList.add('borderRed');
            var nameErrorMessage = document.createElement('p');
            nameErrorMessage.classList.add('paragraphOne');
            nameErrorMessage.innerHTML = 'This field is required';
            name.parentNode.insertBefore(nameErrorMessage, name.nextSibling);
        } else {
            name.classList.add('borderGreen');
        }
    };

    name.onfocus = function() {
        name.value = '';
        name.classList.remove('borderRed');
        if(document.querySelector('.paragraphOne')) {
            document.querySelector(".paragraphOne").remove();
        };
    };

    var email = document.getElementById('email');

    email.onblur = function() {
        if (!email.value.match(emailExpression)) {
            email.classList.add('borderRed');
            var emailErrorMessage = document.createElement('p');
            emailErrorMessage.classList.add('paragraphTwo');
            emailErrorMessage.innerHTML = 'This e-mail is not valid';
            email.parentNode.insertBefore(emailErrorMessage, email.nextSibling);
        } else {
            email.classList.add('borderGreen');
        };
    };

    email.onfocus = function() {
        email.value = '';
        email.classList.remove('borderRed');
        if(document.querySelector('.paragraphTwo')) {
        document.querySelector(".paragraphTwo").remove();
        };
    };

    var select = document.getElementById('select');

    select.onblur = function() {
        if (select.value == '-- Choose Contact Area --') {
            select.classList.add('borderRed');
            var selectErrorMessage = document.createElement('p');
            selectErrorMessage.classList.add('paragraphThree');
            selectErrorMessage.innerHTML = 'It is required more than three letters';
            select.parentNode.insertBefore(selectErrorMessage, select.nextSibling);
        } else {
            select.classList.add('borderGreen');
        }
    };

    select.onfocus = function() {
        select.classList.remove('borderRed');
        if(document.querySelector('.paragraphThree')) {
        document.querySelector(".paragraphThree").remove();
        };
    };

    var textArea = document.getElementById('textArea');

    textArea.onblur = function() {
        if (textArea.value.length <= 3 || !letterNumberSpaceValidation(textArea.value)) {
            textArea.classList.add('borderRed');
            var textAreaErrorMessage = document.createElement('p');
            textAreaErrorMessage.classList.add('paragraphFour');
            textAreaErrorMessage.innerHTML = 'It is required more than three characters';
            textArea.parentNode.insertBefore(textAreaErrorMessage, textArea.nextSibling);
        } else {
            textArea.classList.add('borderGreen');
        }
    };

    textArea.onfocus = function() {
        textArea.value = '';
        textArea.classList.remove('borderRed');
        if(document.querySelector('.paragraphFour')) {
        document.querySelector(".paragraphFour").remove();
        };
    };

    var submitButton = document.getElementById('submitButton');

    submitButton.onclick = function(e) {
        e.preventDefault();

        if(name.classList.contains('borderRed') || email.classList.contains('borderRed') || 
        select.classList.contains('borderRed') || textArea.classList.contains('borderRed')) {
            alert('One or more inputs are not valids');
        } else if (name.value == '' || email.value == '' || select.value == '' || textArea.value == '') {
            alert('One or more inputs are empty');
        } else {
            alert('Your name is: ' + name.value + '\n' + 'Your email is: ' + email.value + '\n' + 
            'Your area is: ' + select.value + '\n' + 'Your text is: ' + textArea.value);
        };
    };
};