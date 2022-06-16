//Clase constructora de usuario:
class Usuario {
    constructor(nombre , apellido, libros , mascotas){
        this.nombre = nombre;
        this.apellido = apellido;        
        this.libros = [libros];
        this.mascotas = [mascotas];        
    }
    getFullName(){
        console.log(this.nombre + " " + this.apellido);
    }        
    addMascota(name){
        this.mascotas.push(name);
    }    
    addBook(nombre,autor){
        this.libros.push({nombre,autor});
    }    
    countMascotas(){       
    return console.log(this.mascotas.length)
    }
    getBookNames(){
        const librosNombre = this.libros.map((libro)=>{
            return libro.nombre
        })
        console.log(librosNombre);
    }          
}

//Carga de nuevo usuario:
let usuario1 = new Usuario("Antonela", "Fernandez",({nombre:"Jupiter", autor:"Bart"}),"Ganzo");

let usuario2 = new Usuario("Paula", "Florez",({nombre:"Batman", autor:"Alf"}),"Gato");

//Llamado a las funciones:
usuario1.getFullName();
usuario1.addMascota("Tiranosaurio");
usuario1.addMascota("Perro");
usuario1.addBook("El señor de los anillos", "Tolkien");
usuario1.addBook("Alexandros", "Massimo Manfredi");
usuario1.countMascotas();
usuario1.getBookNames();

usuario2.getFullName();
usuario2.countMascotas();
usuario2.getBookNames();

