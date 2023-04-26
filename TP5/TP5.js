//Tp5 Ej 1 "Concatenar Arrays "
console.log("TP5 Ejercicio 1");

let array1 = ["Leo", "Monica","Juliana"]
let array2 = ["Juan","Dani"]

function ConcatArray(a, b){
    for(i = 0; i<b.length; i++){
        a.push(b[i])    
    }
    return a
}

console.log (ConcatArray(array1,array2))

//Tp5 Ej 2 "esVocal "
console.log("TP5 Ejercicio 2");

function esVocal(a){
    a = a.toLowerCase()
    if (a === "a" || a === "e" || a === "o" || a ==="i" || a === "u"){
        return true
    }else{
        return false
    }
}
    
console.log(esVocal("A"))
console.log(esVocal("e"))
console.log(esVocal("I"))
console.log(esVocal("o"))
console.log(esVocal("U"))
console.log(esVocal("B"))

//Tp5 Ej 3 "Generar Caracteres"
console.log("TP5 Ejercicio 3");

function generar_caracter(caracter, repetidor){
    return(caracter.repeat(repetidor));
}

console.log(generar_caracter("A",2));
console.log(generar_caracter("e",5));
console.log(generar_caracter("I",0));


//Tp5 Ej 4 "Sumatoria"
console.log("TP5 Ejercicio 4");

function sumaArreglo(arreglo){

    return (arreglo.reduce((sum, actual) => sum + actual));    

}

console.log(sumaArreglo([1,2,3,4,5,6,7]));



//Tp5 Ej 5 "Numero Mayor"
console.log("TP5 Ejercicio 5");

function numeroMayor(num1, num2, num3){

    if(num1 > num2){
        if(num1 > num3){
            return ("El 1 Es el Mayor")
        }else if (num1 < num3){
            return("El 3 es el Mayor")
        }else{
            return("El 1 y 3 Son Mayores")
        }
    }else if (num1 < num2){
        if(num2 > num3){
            return ("El 2 Es el Mayor")
        }else if (num2 < num3){
            return("El 3 es el Mayor")
        }else{
            return("El 2 y 3 Son Mayores")
        }
    }else{
        if(num1 == num3){
            return("Son Todos Iguales")
        }else if(num1 > num3){
            return("El 1 y 2 Son Mayores")
        }else{
            return("El 3 es el Mayor")
        }
    }
}


console.log(numeroMayor(5,6,7));
console.log(numeroMayor(6,6,6));
console.log(numeroMayor(9,6,7));
console.log(numeroMayor(5,7,7));
console.log(numeroMayor(5,6,4));
console.log(numeroMayor(5,5,1));
