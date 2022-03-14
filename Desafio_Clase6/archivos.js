const fs = require('fs')


const productos = [];
class Archivo{
    constructor(nombre){
        this.nombre= nombre;
    }

    async leer (){
        try{
            let content = await fs.promises.readFile(this.nombre, 'utf-8')
            if(content) return console.log(content)
        }catch(err){
            console.error([])
        }
    }
    async guardar(producto){
        try{
            productos.push(producto)
            await fs.promises.writeFile(this.nombre, JSON.stringify(productos, null, '\t'))
        }catch(err){
            console.error("Can`t save file: " + err)
        }
    }
    async borrar(){
        try{
            await fs.promises.unlink(this.nombre, (err)=>{
                if(err) return console.log('Error delete file: ' + err)
            })
        }catch(err){
            console.error("Error delete file: " + err)
        }
    }
}
const archivo = new Archivo("./file/productos.txt")
archivo.guardar({title: "Remeras", price: 3499.50, thumbnail: "https://http2.mlstatic.com/D_NQ_NP_704108-MLA49333256921_032022-O.webp", id: productos.length + 1})
archivo.guardar({title: "Zapatillas", price: 9500.50, thumbnail: "https://http2.mlstatic.com/D_NQ_NP_669795-MLA49152599709_022022-O.webp", id: productos.length + 1})
archivo.guardar({title: "Celular", price: 90000.50, thumbnail: "https://http2.mlstatic.com/D_NQ_NP_995741-MLA47861036467_102021-O.webp", id: productos.length + 1})
archivo.leer()