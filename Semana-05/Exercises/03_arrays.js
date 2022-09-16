console.log('--EXERCISE 3: ARRAYS');


/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/

console.log('-Exercise 3.a:');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"];

console.log('5th and 11th months are: ' + months[4] + ' and ' + months[10]);


// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('\n-Esercise 3.b:');

console.log('Months in alphabetical order: ' + months.sort());


// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('\n-Esercise 3.c:');

months.unshift("Pablo");
months.push("Schivazappa");

console.log('Add one element at the beginning and one at the end: ' + months);


// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('\n-Esercise 3.d:');

months.shift();
months.pop();

console.log('Remove first and last elemenst: ' + months);


// e. Invertir el orden del array (utilizar reverse).

console.log('\n-Esercise 3.e:');

months.reverse();

console.log('Invert order: ' + months);


// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('\n-Esercise 3.f:');

console.log('Add "-" between elements: ' + months.join('-'));


// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('\n-Esercise 3.g:');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"];

console.log('Mayo to Noviembre: ' + months.slice(4, 11));