const data = require("./dataBase")

function listar(cat){
    elementos = []
    for(i=0; i<data.length;i++){
        if(data[i].categoria == cat){
            elementos.push(data[i]);        
        }        
    }
    if(elementos.length == 0){
        return("No hay elementos de esta Categoria");
    }else{
        return(elementos);
    }
}

console.log(listar(process.argv[2]));