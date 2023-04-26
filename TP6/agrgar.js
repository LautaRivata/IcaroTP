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

function agregar(id, nombre, descripcion, categoria, precio){
    if (buscar(id)=="Not Found"){
        elemento = {
            id,
            nombre,
            descripcion,
            categoria,
            precio,
        }
        data.push(elemento)
        console.log("Elemento Agregado Correctamente")
    }else{
        console.log("El id ya existe");  
    }
    return 0
}

agregar(process.argv[2],process.argv[3],process.argv[4],process.argv[5], process.argv[6])