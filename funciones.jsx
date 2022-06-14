class usuario {
    constructor(nombre,apellido,libros,mascotas){
        nombre = "Antonela";
        apellido = "Fernandez";
        libros = {};
        mascotas = [];        
    }
// getFullName(){
//     console.log(nombre + " " + apellido)
// }
// addMascota(name){
//     mascotas.push(name)
// }
// addBook(nombre,autor){
//     libros.push([nombre,autor])
// }
// countMascotas(){
//     return console.log(mascotas)
// }
// getBookNames(){
//     return console.log(libros)
// }    
}
function getFullName(){
    console.log(usuario.nombre + " " + usuario.apellido)
}
function addMascota(name){
    mascotas.push(name)
}
function addBook(nombre,autor){
    libros.push([nombre,autor])
}
function countMascotas(){
    return console.log(mascotas)
}
function getBookNames(){
    return console.log(libros)
} 

getFullName();
addMascota("Tiranosautio");
addBook("El señor de los anillos", "Tolkien");
countMascotas();
getBookNames();

