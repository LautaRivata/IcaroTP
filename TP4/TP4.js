const readlineSync = require("readline-sync");
//const process = require("process");


//Tp4 Ej 1 "Saludo mediante proces.argv"
console.log("TP4 Ejercicio 1");

function Saludar(nombre){
    console.log('Hola %s !!!', nombre); 
}
    
if (process.argv[2] != null){
    Saludar(process.argv[2]);
}
else{
    Saludar("Anonimus");
}

/////////////////////////////////////////////////////////////
// TP4 Ejercicio 2 "Objeto"
console.log("\nTP4 Ejercicio 2");

let persona ={
    nombre: "",
    apellido: "",
    edad: ""
}

persona.nombre = readlineSync.question("Introdusca su Nombre:");
persona.apellido = readlineSync.question("introdusca su Apellido:");
persona.edad = readlineSync.questionInt("introdusca su edad:");

console.log("Objeto Creado:");
console.log(persona);

/////////////////////////////////////////////////////////////
// TP4 Ejercicio 3 "Buscador en listas"
console.log("\nTP4 Ejercicio 3");

const miLista1 = ["Tiberio", "Claudio", "Liviano", "Pretoriano", "Vir Eminetisimus"];
const miLista2 = ["Marco", "Ulpio", "Trajano", "Imperator", "Dacicus", "Particus"];

function buscarElemento(lista, objetivo){
    for(i = 0; i < lista.length; i++){
        if(lista[i] == objetivo){
            return (console.log("Elemento %s encontrado en la pocicion %d", objetivo, i));
        }
    }
    return (console.log("Not Founded..."));
}

buscarElemento(miLista1, "Tiberio");
buscarElemento(miLista1, "Aulo");
buscarElemento(miLista2, "Particus");
buscarElemento(miLista2, "Arabicus");

/////////////////////////////////////////////////////////////
// TP4 Ejercicio 4 "Inversor de Arrays"
console.log("\nTP4 Ejercicio 4");

console.log("Lista al derecho ==>", miLista2);
let reversible = miLista2.reverse();
console.log("Lista invertida ==>", reversible);

//ahora va con una funcion

function invertirLista(lista){
    let reversa = []
    for(i = 0; i< lista.length; i++){
        reversa.unshift(lista[i]);
    }
    return(reversa)
}
console.log("Ahora va con funcion Propia")
console.log("Lista al derecho ==>", miLista1);
console.log("Lista invertida ==>", invertirLista(miLista1));
