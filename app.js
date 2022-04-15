const express = require("express");

const app = express();

//manejar ruta de archivos
const path = require("path");

//usando recursos estaticos
app.use(express.static('public'));

//ponemos a escuchar el servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000")
});

//Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder


app.get("/compra", (req, res)=> {
    res.send("Compra Exitosa")
})

app.get("/contacto", (req, res)=> {
    res.send("Dejanos tu contacto")
})

app.get("/un_array", (req, res)=> {
    res.send([1, 2, 3, 4])
})

app.get("/un_objeto", (req, res)=> {
    res.send({
        name: "Leonel",
        apellido: 'Sanchez'
    })
})

let producto = {
    tipoProducto: "null",
    precio:"null", 
    cantidad:"null"
}

app.get("/producto", (req, res)=>{
    res.send(producto)
})

app.get("/", (req, res) => {
    //let htmlPath = path.resolve(__dirname, "./views/index.html");
    //res.sendFile(htmlPath)
    res.sendFile(path.join(__dirname, "./views/index.html"))     //otra forma de escribir el codigo
    
})
    
