const fs = require("fs");

class Contenedor{
    constructor(ruta){
        this.ruta = ruta
    }
    async save(obj){
        try {
            let dataArchivo = await fs.promises.readFile(this.ruta, "utf8");
            let dataArchivoParseado = JSON.parse(dataArchivo)           
            if (dataArchivoParseado.length) {
                await fs.promises.writeFile(this.ruta, JSON.stringify([...dataArchivoParseado, {...obj, id: dataArchivoParseado[dataArchivoParseado.length - 1].id + 1}], null, 2))
            } else {
                await fs.promises.writeFile(this.ruta, JSON.stringify([{...obj, id: 1}], null, 2))
            }
            return dataArchivoParseado[dataArchivoParseado.length - 1].id + 1
            //console.log(`El ID del item es: ${dataArchivoParseado[dataArchivoParseado.length - 1].id + 1}`);
        } catch (error) {
            console.log(error);
        }        
    }

    //Traer por ID
    async getById(id){
        try {
            let dataArchivo = await fs.promises.readFile(this.ruta, "utf8");
            let dataArchivoParseado = JSON.parse(dataArchivo);
            let producto = dataArchivoParseado.find(producto => producto.id === id);
            if (producto) {
                console.log(producto);
                return producto;                
            } else {
                console.log("No existe el producto");
                return null                
            }            
        } catch (error) {
            console.log(error);
        }
    }

    //Traer todos
    async getAll(){        
            try {
                let dataArchivo = await fs.promises.readFile(this.ruta, "utf8");
                let dataArchivoParseado = JSON.parse(dataArchivo);
                if (dataArchivoParseado.length) {
                    //console.log(dataArchivoParseado);
                    return dataArchivoParseado;                    
                } else {
                    console.log("No hay productos");
                }                               
            } catch (error) {
                console.log(error);
            }        
    }

    //Borrar por id
    async deleteById(id){
        try {
            let dataArchivo = await fs.promises.readFile(this.ruta, "utf8");
            let dataArchivoParseado = JSON.parse(dataArchivo);
            let producto = dataArchivoParseado.find(producto => producto.id === id);
            if (producto) {
                let dataArchivoFiltrado = dataArchivoParseado.filter(producto => producto.id !== id); 
                await fs.promises.writeFile(this.ruta, JSON.stringify(dataArchivoFiltrado, null, 2), "utf8");
                console.log("Producto eliminado correctamente");
            } else {
                console.log("Producto no encontrado");
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    //Borrar todo
    async deleteAll(id){
        try {
            let dataArchivo = await fs.promises.readFile(this.ruta, "utf8");
            let dataArchivoParseado = JSON.parse(dataArchivo);            
            if (dataArchivoParseado.length) {                
                await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2), "utf8");
                console.log("Se eliminaron todos los productos");
            } else {
                console.log("No hay productos para eliminar");
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    //Random
    async randomItem(){
        try {
            let dataArchivo = await fs.promises.readFile(this.ruta, "utf8");
            let dataArchivoParseado = JSON.parse(dataArchivo);
            let itemRandom = dataArchivoParseado[Math.floor(Math.random()*dataArchivoParseado.length)];
            return itemRandom;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports= Contenedor;