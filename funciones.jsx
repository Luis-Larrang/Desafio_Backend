//CUANDO INTETNO USAR CLASS ME DICE QUE NO ES FUNCION O NO RECONOCE LOS PARAMETROS.
class usuario {
    constructor(nombre , apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        //Tengo duda si en libros va como array [] o directo objeto {} para hacer el push.
        this.libros = {};
        this.mascotas = [];        
    } 
 addMascota(name){
     this.mascotas.push(name);
 }
 //De nuevo aca dependiendo de la respuesta a la duda anterior no se si deberia ponerle los {}.
 addBook(nombre,autor){
     this.libros.push(nombre,autor);
 }
}

//Creacion de nuevo usuario pero sin mascotas ni libros

let usuario1 = new usuario("Antonela", "Fernandez");

//Llamado a nombre completo funciona

function getFullName(e){
    console.log(e.nombre + " " + e.apellido);
}

//No puedo probar si funcionan porque tengo errores previos.
function countMascotas(e){
    return console.log(e.mascotas.length)
}
function getBookNames(e){
    return console.log(e.libros)
} 

/*FUNCIONA PERO SIN CLASS

const nombre = "Antonela";
const apellido = "Fernandez";
const libros = {};
const mascotas = []; 

function getFullName(){
    console.log(nombre + " " + apellido)
}
function addMascota(name){
    mascotas.push(name)
}
function addBook(nombre,autor){
    libros.push(nombre,autor)
}
function countMascotas(){
    return console.log(mascotas.length)
}
function getBookNames(){
    return console.log(libros)
} 
*/

//Llamado funciona.
getFullName(usuario1);

//Me dice que addMascota no esta definido, intente poner usuario.addMascota pero tampoco. Lo mismo pasa con addBook()
addMascota("Tiranosaurio");
addBook("El señor de los anillos", "Tolkien");
//Aca me surge la duda de si debo poner usuario u otra cosa.
countMascotas(usuario);
getBookNames(usuario);

