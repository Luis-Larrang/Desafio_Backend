const { Router } = require("express");
const express = require("express");
const Contenedor = require("./contenedor.js")
const app = express();
const routerProductos = Router();
const PORT = process.env.PORT || 8080
const contenedor = new Contenedor("./productos.txt")
const arrayProductos =[]

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use("/api/productos", routerProductos);
app.use(express.json())

routerProductos.post("/",  (req, res) => {
    const objProducto = req.body;    
    contenedor.save(objProducto);
    res.json({
        objProducto
    })
})

routerProductos.put("/:id", async (req, res)=>{
    try {
        const {id} = req.params;        
        const objProducto = req.body;
        const { nombre, precio, thumbnail } = req.body        
        contenedor.actualizarPorId({id: parseInt(id), ...objProducto})       
        const respuesta = await contenedor.actualizarPorId({nombre, precio, thumbnail});
        res.json({respuesta})
    } catch (error) {
        console.log(error);
    }   
})

routerProductos.get("/", async (req , res) => { 
    try {        
        const productList = await contenedor.getAll();        
        res.json({
            productList
        })  
    } catch (error) {
        console.log(error);
    }      
})

routerProductos.get("/:id", async (req , res) => { 
    try {
        const {id} = req.params;       
        const productoPorId = await contenedor.getById(parseInt(id));                
        res.json({
            productoPorId
        })  
    } catch (error) {
        console.log(error);
    }      
})

const server = app.listen(PORT, () => {    
    console.log(`Escuchando el puerto ${server.address().port}`);    
})


/*Hola Luis, gracias por entregar el desafio. Vi varias cosas, primero tenes que hacer destructuring en req.body const { nombre, precio, thumbnail } = req.body; luego la funcion deberia ser asincronica, unas async await async(req,res  y const respuesta = await contenedor.actualizarPorId.....   la instancia de contenedor hacela afuera de las rutas, no hace falta repetirla. Fija esas esa cosas y me vas diciendo. */