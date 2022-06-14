//CUANDO INTETNO USAR CLASS ME DICE QUE NO ES FUNCION O NO RECONOCE LOS PARAMETROS.
/*class usuario {
    constructor(nombre,apellido,libros,mascotas){
        nombre = "Antonela";
        apellido = "Fernandez";
        libros = {};
        mascotas = [];        
    }
 getFullName(){
     console.log(nombre + " " + apellido)
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
 }    
}*/

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

getFullName();
addMascota("Tiranosaurio");
addMascota("Lechuza");
addBook("El señor de los anillos", "Tolkien");
countMascotas();
getBookNames();

