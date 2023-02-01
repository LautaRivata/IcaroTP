// Trabajo Practico 1 Icaro
console.log("TP 2");

// Numero Par o Impar
console.log("numero Par o Impar");
const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);

let resto = numeroRandom % 2;

if (resto == 0){
    console.log("El numero", numeroRandom, "es PAR");
}
else{
    console.log("El numero", numeroRandom, "es IMPAR"); 
}

// Largo de una Palabra
console.log("Largo de Palabras");

let palabra1 = "Tren";
let palabra2 = "Edificio";

if (palabra1.length > palabra2.length){
    console.log(palabra1, "Es mas Larga");
}
else if(palabra1.length < palabra2.length){
    console.log(palabra2, "Es mas Larga");
}
else{
    console.log("Tiene el mismo Largo");
}