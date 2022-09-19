console.log('--EXERCISE 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el 
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/

console.log('-Exercise 6.a:');

function addition(num1, num2){
    return num1 + num2;
};

var result = addition(22.21, 10.34);

console.log('The result of the addition is: ' + result);


/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; 
de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como 
resultado.
*/

console.log('\n-Esercise 6.b:');

function addition2(num1, num2){
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        alert('One or both of the parameters are not numbers.');
        return NaN;
    } else {
        return num1 + num2;
    };
};

console.log('The result of the addition is: ' + addition2(3, '5'));


/* c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un 
número entero.
*/

console.log('\n-Esercise 6.c:');

function validateInteger(num){
    return Number.isInteger(num);
};


/* d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los 
números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a 
entero (redondeado).
*/

console.log('\n-Esercise 6.d:');

function addition3(num1, num2){
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        alert('One or both of the parameters are not numbers.');
        return NaN;
    } else if (!validateInteger(num1) || !validateInteger(num2)) {
        alert('One or both of the parameters are not an integer.');
        return Math.round(num1) + Math.round(num2);
    }
};

console.log('The result of the addition is: ' + addition3(2.6, 4));


/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando 
que todo siga funcionando igual.
*/

console.log('\n-Esercise 6.e:');

function validate (number) {
    if (typeof number !== 'number') {
        alert('This parameter is not a number.');
        return NaN;
    } else if (!validateInteger(number)) {
        alert('This parameter is not an integer.');
        return Math.round(number);
    }
    return number
};

function addition4 (num1, num2) {
    num1 = validate (num1);
    num2 = validate (num2);
    return num1 + num2;
};

console.log('The result of the addition is: ' + addition4(2.6, 5));