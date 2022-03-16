import express from 'express';
import {readFileSync} from 'fs';

const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Listening in PORT ${PORT}`)
})

let visits = {visits: {item: 0, items: 0}}
let data = JSON.parse(readFileSync('./file/productos.txt', 'utf-8'))

app.get('/items', (req, res) =>{
    res.send({items: data, cantidad: data.length})
    visits.visits.items = visits.visits.items + 1;
})

app.get('/item-random', (req,res)=>{
    res.send(data[Math.floor(Math.random() * data.length)])
    visits.visits.item = visits.visits.item + 1;
})
app.get('/visits', (req,res)=>{
    res.send(visits)
})
