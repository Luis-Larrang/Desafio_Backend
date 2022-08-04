const { Router } = require("express");
const express = require("express");
const Contenedor = require("./contenedor.js")
const app = express();
const routerProductos = Router();
const PORT = process.env.PORT || 8080
const arrayProductos =[]

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use("/api/productos", routerProductos);
app.use(express.json())

routerProductos.post("/", (req, res) => {
    const objProducto = req.body;
    const contenedor = new Contenedor("./productos.txt");
    contenedor.save(objProducto);
    res.json({
        objProducto
    })
})

routerProductos.put("/:id", (req, res)=>{
    const {id} = req.params;
    const objProducto = req.body;
    const contenedor = new Contenedor("./productos.txt")
    contenedor.actualizarPorId({id: parseInt(id), ...objProducto})
    //ACA ME DA UN ERROR QUE "NOMBRE NO ESTA DEFINIDO" Y SI MANDO REST ME BORRA TODO DEL OBJETO MENOS ID
    const respuesta =  contenedor.actualizarPorId({nombre, precio, thumbnail,id});
    res.json({respuesta})
})

routerProductos.get("/", async (req , res) => { 
    try {
        const contenedor = new Contenedor("./productos.txt");
        const productList = await contenedor.getAll(); 
        //res.send(productList);
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
        const contenedor = new Contenedor("./productos.txt")
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