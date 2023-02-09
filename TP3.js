const readlineSync = require("readline-sync");

//Tp3 Ej 1 "Repetir palabra del Usuario"
console.log("TP3 Ejercicio 1");
let palabra = readlineSync.question("ingrese su palabra: ");

for(n=0;n<10;n++){
    console.log(palabra);
}


// TP3 Ej 2 "Cumpleanos"
console.log("-----------------------------------------");
console.log("TP3 Ejercicio 2");

let edad = readlineSync.questionInt("Ingrese su edad por favor: ");

for(n=1; n<=edad; n++){
    console.log(n);
}


// TP3 Ejercicio 3 " numeros Impares"
console.log("-----------------------------------------");
console.log("TP3 Ejercicio 3");

let numero = readlineSync.questionInt("Ingrese un entero Positivo: ");
let helper = [];
if ((numero % 2) == 0){
    numero--;
}
while(numero > 0){
    helper.unshift(numero);
    numero = numero - 2; 
}
console.log(helper)

// TP3 Ejercicio 4 "triangulo"
console.log("-----------------------------------------");
console.log("TP3 Ejercicio 4");


let cantidad = readlineSync.questionInt("Ingrese un entero Positivo: ");
let cant= 1;
let str = "*";
while(cant <= cantidad){
    console.log(str.repeat(cant));
    cant++;
}

// TP3 Ejercicio 5 "Spell"
console.log("-----------------------------------------");
console.log("TP3 Ejercicio 5");

palabra = readlineSync.question("ingrese su palabra: ");

for(n=(palabra.length-1);n>=0 ;n--){
    console.log(palabra[n]);
}
