console.log('2' + 5); // 25
console.log(2 + '7'); // 27

console.log('2' - 5); // -3
console.log('4' / '2'); // 2

let a = 54;
a += 4; // Es lo mismo que (a = a + 4)
a /= 2; // Es lo mismo que (a = a / 2)
console.log(a); // 29

let edad = prompt('¿Cuál es tu edad?'); // El usuario introduce 27. Pero "prompt" siempre devuelve un string, así que "edad" = '27'
let edadMasDiez = edad + 10; // '27' + 10 = '2710'
console.log(edadMasDiez); // 2710 en lugar de 37
// Se ha convertido la conversión de tipo de 10 a '10'. El operador '+' se ha convertido en un operador de concatenación de cadenas.

parseInt('3'); // 3
parseFloat('3.856'); // 3.856
Number('3'); // 3
+'3'; // 3

console.log(+'3' + 5); // 8

// Ejemplo anterior ejecutado de manera correcta
let edad = prompt('¿Cuál es tu edad?'); // El usuario introduce 27
let edadMasDiez = Number(edad) + 10; // 27 + 10 = 37. Convertimos la cadena '27' a número
console.log(edadMasDiez); // 37

isNaN('5rt'); // true (No es un número válido)
isNaN('654'); // false
isNaN('285.32'); // false
isNaN('2e16'); // false

let (0 == false); // true
let ('' == false); // true

let (0 === false); // false (distinto tipo)
let ('' === false); // false (distinto tipo)

let cad = "Texto con 'comillas' dentro";

let mayorDe30;
let edad = prompt('¿Cuál es tu edad?');
if (edad >= 30) {
    mayorDe30 = true;
} else {
    mayorDe30 = false;
}

let mayorDe30 = (edad >= 30) ? true : false;
// Se evalúa la condición (edad >= 30). Si es verdadera, se asigna a la variable "mayorDe30" el valor indicado tras '?' (true).
// Si es falsa, se asigna el valor indicado tras ':' (false).

let colores = ['azul', 'rojo', 'blanco'];

// Bucle 'for' tradiciional
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
}

// Bucle 'for...of'
for (let color of colores) {
    // La variable 'color' almacena el elemento del array que se está iterando
    // Equivalencia: color = colores[i]
    console.log(color);
}

let respuesta = prompt("Texto para mostrar", "Valor por defecto del cuadro de texto (opcional)");
// respuesta almacena el texto escrito por el usuario en el cuadro de diálogo
// OJO: siempre almacenará un string. Puede que sea neceario convertirlo a otro tipo de datos.

let acepta = confirm("¿Estás seguro de que quieres continuar?");
// acepta almacena true si el usuario pulsa "Aceptar" y false si pulsa "Cancelar"

let acepta = confirm("¿Estás seguro de que quieres continuar?");
// acepta almacena true si el usuario pulsa "Aceptar" 
// y false si pulsa "Cancelar"

////////FUNCIONES////////

function pintar(color="blanco") {
    console.log(`Pintando con color ${color}`);
}

pintar(); // Pintando con color blanco
pintar("azul"); // Pintando con color azul

function sumar(a,b){
    return a + b;
}

let suma1 = sumar(3,5); // 8
let funcSuma = sumar; /* funcSuma es una referencia 
                         a la función sumar, no se ejecuta*/
let suma2 = funcSuma(4,6); // 10

function sumar(a,b){
    return a + b;
}
function restar(a,b){
    return a - b;
}
function operar(operacion, a, b){
    return operacion(a,b);
}

let v1 = operar(sumar, 3, 5); // 8
let v2 = operar(restar, 3, 5); // -2