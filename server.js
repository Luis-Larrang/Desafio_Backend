const express = require("express");
const Contenedor = require("./contenedor.js");
const contenedor = new Contenedor("./productos.txt");

const app = express()

//Se me habia hecho un desastre de cosas que fui probando a ver si me salia, pero borre todo y deje lo minimo.

app.get("/productos", (req , res) => {            
    res.send(`${contenedor.getAll()}`)       
})

app.get("/productoRandom", (req , res) => {    
    res.send(`Este seria el producto random`)       
})

const PORT = 8080;
const server = app.listen(PORT, () => {    
    console.log(`Escuchando el puerto ${server.address().port}`);    
})

server.on("error", err => console.log(err))

