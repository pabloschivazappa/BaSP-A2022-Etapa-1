console.log('--EXERCISE 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase).
*/

console.log('-Exercise 2.a:');
var surname = 'schivazappa';
console.log('String in uppercase: ' + surname.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 
5 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

console.log('\n-Esercise 2.b:');
var surname = 'schivazappa';
console.log('The first 5 characters of the strings are: ' + surname.substring(0, 5));


/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 
3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

console.log('\n-Esercise 2.c:');
var surname = 'schivazappa';
console.log('The las 3 characters of the string are: ' + surname.substring(surname.length - 3));


/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra 
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +).
*/

console.log('\n-Esercise 2.d:');
var surname = 'schivazappa';
var firstCharUpper = surname.substring(0, 1).toUpperCase() + surname.substring(1).toLowerCase();
console.log('First character in uppercase: ' + firstCharUpper);


/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición 
del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

console.log('\n-Esercise 2.e:');
var musician = 'Trent Reznor';
var space = musician.indexOf(' ');
console.log('The position of the space is: ' + space);


/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y 
el operador +).
*/

console.log('\n-Esercise 2.f:');
var bassist = 'marcus miller';
var firstChar = bassist.substring(0,1).toUpperCase() + bassist.substring(1, bassist.indexOf(' ') + 1).toLowerCase() + 
bassist.substring(bassist.indexOf(' ') + 1, bassist.indexOf(' ') + 2).toUpperCase() + 
bassist.substring(bassist.indexOf(' ') + 2).toLowerCase();
console.log('Both words with uppercase in first character: ' + firstChar);