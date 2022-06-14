//CUANDO INTETNO USAR CLASS ME DICE QUE NO ES FUNCION O NO RECONOCE LOS PARAMETROS.
class usuario {
    constructor(nombre , apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];        
    }
    /*
 getFullName(){
     console.log(this.nombre + " " + this.apellido)
 }
 addMascota(name){
     mascotas.push(name)
 }
 addBook(nombre,autor){
     libros.push([nombre,autor])
 }
 countMascotas(){
     return console.log(mascotas.length)
 }
 getBookNames(){
     return console.log(libros)
 } */
}

//let usuario1 = new usuario("Antonela", "Fernandez", addBook(usuario1 ,"El señor de los anillos", "Tolkien"), addMascota(usuario1,"Tiranosaurio"));
let usuario1 = new usuario("Antonela", "Fernandez", [] , []);

function getFullName(e){
    console.log(e.nombre + " " + e.apellido)
}
function addMascota(e , name){
    e.mascotas.push(name)
}
function addBook(e,nombre,autor){
    e.libros.push([nombre,autor])
}
function countMascotas(e){
    return console.log(e.mascotas.length)
}
function getBookNames(e){
    return console.log(e.libros)
} 

/*
//FUNCIONA PERO SIN CLASS
const nombre = "Antonela";
const apellido = "Fernandez";
const libros = [];
const mascotas = []; 

function getFullName(){
    console.log(nombre + " " + apellido)
}
function addMascota(name){
    mascotas.push(name)
}
function addBook(nombre,autor){
    libros.push([nombre,autor])
}
function countMascotas(){
    return console.log(mascotas.length)
}
function getBookNames(){
    return console.log(libros)
} 
*/
getFullName(usuario1);
//addMascota(usuario1,"Tiranosaurio");
//addMascota(usuario1,"Lechuza");
//addBook(usuario1,"El señor de los anillos", "Tolkien");
countMascotas();
getBookNames();

