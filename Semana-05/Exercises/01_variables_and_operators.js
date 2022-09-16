console.log('--EXERCISE 1: VARIABLE AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en 
una 3er variable.
*/

console.log('-Exercise 1.a:');
var a = 22;
var b = 6;
var addition = a + b;
console.log('The result of the addition is: ' + addition);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('\n-Esercise 1.b:');
var name = 'Pablo';
var surname = 'Schivazappa';
var fullname = name + ' ' + surname;
console.log('The addition of the strings is: ' + fullname);


/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando 
el resultado de la suma en una 3er variable (utilizar length).
*/

console.log('\n-Esercise 1.c:');
var nationality = 'Argentinian';
var maritalStatus = 'Single';
var lengthAddition = nationality.length + maritalStatus.length;
console.log('The addition of the length of both strings is: ' + lengthAddition);