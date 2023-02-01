// Trabajo Practico 1 Icaro
console.log("TP 2");

const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);

let resto = numeroRandom % 2

if (resto == 0){
    console.log("El numero ", numeroRandom, "es PAR")
}
else{
    console.log("El numero ", numeroRandom, "es IMPAR") 
}

