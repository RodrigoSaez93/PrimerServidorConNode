const express = require('express')
const app = express()
const fs = require("fs/promises");

const puerto = 8080

let visitas1 = 0;
let visitas2 = 0;

app.get('/items',async (req,res)=>{
    visitas1++
    const productosTxt = await fs.readFile('productos.txt')
    const productos = JSON.parse(productosTxt)
    const resultado = { items: productos, cantidad: productos. length}
    res.json(resultado)
        
})

app.get('/item-randon',async (req,res)=>{
    visitas2++

    const productosTxt = await fs.readFile('productos.txt')
    const productos = JSON.parse(productosTxt)
    const random = Math.floor(Math.random()*productos.length)
    const resultado ={items:productos[random]} 
   
    res.json(resultado)

})

app.get('/visitas',(req,res)=>{


    const resultado={visitas:{items:visitas1,item:visitas2}}
    res.json(resultado)
})
const server= app.listen(puerto,()=>{
    console.log('Servidor Incializado en Puerto  ',puerto)
})

server.on('error', function (err) {
    console.log('ERROR =>', err);
  });
