// La primera parte es sencilla: debemos crear 3 objetos y guardarlos en un array:
let coche1 = new Coche("Seat", "azul");
let coche2 = new Coche("Kia", "rojo");
let coche3 = new Coche("Renault", "verde");


let coches = [];
coches.push(coche1);
coches.push(coche2);
coches.push(coche3);

// A continuación se debe guardar el array en almacenamiento local. Como dicho almacenamiento
// es solo de *cadenas de texto*, debemos convertir el array a *JSON* para guardarlo:
localStorage.setItem("coches", JSON.stringify(coches));

// Este paso ha *destruido la funcionalidad* de los objetos: solo se han guardado sus
// propiedades (~marca~ y ~color~), no sus métodos (~arrancar~).

// A continuación leemos de vuelta los datos. Como están en formato JSON (texto),
// los convertimos de nuevo a objetos:
let cochesRecuperados = JSON.parse(localStorage.getItem("coches"));

// Ahora bien, ~cochesRecuperados~ es un array de objetos *sin funcionalidad*.
//Para recuperar la funcionalidad podemos hacer lo siguiente:
let cochesRecFunc = [];
for (let recup of cochesRecuperados) {
    // Creamos un nuevo objeto basado en el constructor 'Coche'
    // Obtenemos los datos de 'marca' y 'color' del objeto recuperado del almacenamiento local
    let coche = new Coche(recup.marca, recup.color);
    cochesRecFunc.push(coche);
}

// cochesRecuperados[0].arrancar(); // Error: no es una función
cochesRecFunc[0].arrancar(); // Arrancando un coche Seat de color azul
