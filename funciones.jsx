//Clase constructora de usuario:
class usuario {
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
    //Por algun motivo me cuenta una mascota de mas, como si ya tuviera a posicion [0] ocupada si no le cargo una mascota en new user.
    countMascotas(){       
    return console.log(this.mascotas.length)
    }
    //Cuando modifique el constructor me dejo de reconocer el x.nombre y no se bien porque.     
    /*getBookNames() {
        this.libros.forEach(x => {
          return console.log(x.nombre)
        })
    }*/   
    //Si solo llamo a this.libros me sale el objeto completo.
    getBookNames(){
        console.log(this.libros);
    }          
}

//Carga de nuevo usuario:
let usuario1 = new usuario("Antonela", "Fernandez");
//Siento que es muy rebuscado y tiene que haber una manera mas simple de cargar esos datos.
let usuario2 = new usuario("Paula", "Florez",({nombre:"Batman", autor:"Alf"}),"Gato");

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

