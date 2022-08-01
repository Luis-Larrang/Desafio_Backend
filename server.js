const express = require("express");
const Contenedor = require("./contenedor.js");
const contenedor = new Contenedor("./productos.txt");

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())

//Dejo distintos metodos de hacer lo mismo conectado para tener as diferentes opciones a la vista.

app.get("/productos", async (req , res) => { 
    try {
        const productList = await contenedor.getAll(); 
        //res.send(productList)
        res.json({
            productList
        })  
    } catch (error) {
        console.log(error);
    }      
})

app.get("/productoRandom", async (req , res) => {
    try {        
        const productoRandom = await contenedor.randomItem();   
        res.send(productoRandom) 
        /*res.json({
            productoRandom
        })*/ 
    } catch (error) {
        console.log(error);
    }         
})

const server = app.listen(PORT, () => {    
    console.log(`Escuchando el puerto ${server.address().port}`);    
})

server.on("error", err => console.log(err))



