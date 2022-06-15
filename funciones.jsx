class usuario {
    constructor(nombre , apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        //Tengo duda si en libros va como array [] o directo objeto {}, para hacer el push entiendo que necesito que sea un array con objetos adentro no?
        this.libros = [];
        this.mascotas = [];        
    }
    getFullName(){
        console.log(this.nombre + " " + this.apellido);
    }        
    addMascota(name){
        this.mascotas.push(name);
    }
    //De nuevo aca dependiendo de la respuesta a la duda anterior no se si deberia ponerle los {}.
    addBook(nombre,autor){
        this.libros.push({nombre,autor});
    }
    countMascotas(){
    return console.log(this.mascotas.length)
    }    
    getBookNames() {
        this.libros.forEach(x => {
          console.log(`${x.nombre}`)
        })
      }    
}

//Creacion de nuevo usuario pero sin mascotas ni libros

let usuario1 = new usuario("Antonela", "Fernandez");

usuario1.getFullName();
usuario1.addMascota("Tiranosaurio");
usuario1.addMascota("Perro");
usuario1.addBook("El señor de los anillos", "Tolkien");
usuario1.addBook("Alexandros", "Massimo Manfredi");
usuario1.countMascotas();
usuario1.getBookNames();

