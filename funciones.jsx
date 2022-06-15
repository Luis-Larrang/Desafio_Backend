//Clase constructora de usuario:
class usuario {
    constructor(nombre , apellido){
        this.nombre = nombre;
        this.apellido = apellido;        
        this.libros = [];
        this.mascotas = [];        
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
    //Me queda una sola duda para cumplir con el desafio, unir los dos arrays que se me generan en lugar de salir unidos.     
    getBookNames() {
        this.libros.forEach(x => {
          return console.log(x.nombre)
        })
    }             
}

//Carga de nuevo usuario:
let usuario1 = new usuario("Antonela", "Fernandez");

//Llamado a las funciones:
usuario1.getFullName();
usuario1.addMascota("Tiranosaurio");
usuario1.addMascota("Perro");
usuario1.addBook("El señor de los anillos", "Tolkien");
usuario1.addBook("Alexandros", "Massimo Manfredi");
usuario1.countMascotas();
usuario1.getBookNames();

