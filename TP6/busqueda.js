const data = require("./dataBase")

function buscar(id_buscado){
    elemento = {}
    for(i=0; i<data.length;i++){
        if(data[i].id == id_buscado){
            elemento = data[i];
            return(elemento)        
        }        
    }
    return("Not Found")
}

function precio(precioMax){
    elementos = []
    for(i=0; i<data.length;i++){
        if(data[i].precio <= precioMax){
            elementos.push(data[i]);        
        }        
    }
    if(elementos.length == 0){
        return("No hay elementos por Menos de este Precio");
    }else{
        return(elementos);
    }


}


if(process.argv[2] == "Buscar"){
    console.log(buscar(process.argv[3]));
}

if(process.argv[2] == "Precio"){
    console.log(precio(process.argv[3]));
}
