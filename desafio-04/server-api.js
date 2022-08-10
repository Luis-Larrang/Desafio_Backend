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
app.use(express.json())
app.use("/api/productos", routerProductos);

routerProductos.post("/",  (req, res) => {
    const objProducto = req.body; 
    console.log(objProducto);   
    contenedor.save(objProducto);
    res.json({
        objProducto
    })
})

routerProductos.put("/:id", async (req, res)=>{
    try {
        const {id} = req.params;        
        const objProducto = req.body;                     
        const respuesta = await contenedor.actualizarPorId({id: parseInt(id), ...objProducto});        
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
