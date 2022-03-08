// Declarar una clase usuario
// Hacer que usuario cuente con los siguientes atributos
/* nombre: string
apellido:string
libros: Object[]
mascotas: Object[] */
// Los valores de los atributos se deberian cargar a traves del constructor al momento de crear las instancias. 
/* Hacer que usuario cuente con los siguientes metodos, 
getFullName():string Retorna el completo del usuario usar template strings
addMascota():string void. Recibe un nombre de mascota y lo agrega al array de mascotas
countMascotas(): Number Retorna la cantidad de mascotas que tiene el usuario
addBook(string, string): void  Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: 
{nombre: String, autor: String} al array de libros.
getBookNames(): String[] Retorna un array con solo los nombres del array de libros del usuario*/
// Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus metodos

class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName(){
        console.log(`Hola soy ${this.nombre} ${this.apellido}`)
    }
    addMascotas = (nombre) =>{
        this.mascotas.push(nombre)
    }
    countMascotas(){
        console.log(`Tengo ${this.mascotas.length} mascotas`)
    }
    addBook(nombre, autor){
        this.libros.push({nombre, autor})
    }
    getBookNames(){
        console.log(this.libros.map((libros) =>libros.nombre))
    }

}
const usuario1 = new Usuario("Claudio", "Lombao", [], [])
usuario1.getFullName()
usuario1.addMascotas("Franco")
usuario1.addMascotas("milanesa")
usuario1.countMascotas();
usuario1.addBook("El señor de los anillos", "J.R.R Tolkien");
usuario1.addBook("Harry Potter y el caliz de fuego", "J.K. Rowling");
usuario1.getBookNames();