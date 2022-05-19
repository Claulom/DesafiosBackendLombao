const fs = require('fs')



class Archivo{
    constructor(nombre){
        this.nombre= nombre;
        this.productos = [];
    }

    async leer (){
        try{
            let content = await fs.promises.readFile(this.nombre, 'utf-8')
            if(content) return console.log(content)
        }catch(err){
            console.error([])
        }
    }

    getId(){
        const l = this.productos.length
        if(l < 1) return 0
        return this.productos[this.productos.length - 1].id
    }
    
   
    async save(producto){
        const id = this.getId()
        this.productos.push({
            ...producto, ...{id: id + 1}
        })
        try{
          await  fs.promises.writeFile(this.nombre, JSON.stringify(this.productos, null, '\t'))
        }catch(err){
            console.error("Can`t save file: " + err)
        }
    }
    getById(id){
        return this.productos.find(p => p.id == id)
    }
    getAll(){
        return this.productos
    }
    deleteById(id){
        const idx = this.productos.findIndex(p => p.id == id)
        this.productos.splice(idx, 1)
      
    }
    async borrar(){
        this.productos = []
        await fs.promises.readFile(this.nombre, 'utf-8')
    }
}
const archivo = new Archivo("./file/productos.txt")
archivo.save({title: "Remeras", price: 3499.50, thumbnail: "https://http2.mlstatic.com/D_NQ_NP_704108-MLA49333256921_032022-O.webp"})
archivo.save({title: "Zapatillas", price: 9500.50, thumbnail: "https://http2.mlstatic.com/D_NQ_NP_669795-MLA49152599709_022022-O.webp"})
archivo.save({title: "Celular", price: 90000.50, thumbnail: "https://http2.mlstatic.com/D_NQ_NP_995741-MLA47861036467_102021-O.webp"})
archivo.save({title: "Tablet", price: 29000.50, thumbnail: "https://http2.mlstatic.com/D_NQ_NP_995741-MLA47861036467_102021-O.webp"})

archivo.leer()

archivo.deleteById(2)

archivo.leer