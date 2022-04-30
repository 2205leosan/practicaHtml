const express = require("express");
//const req = require("express/lib/request");
const app = express();

//manejar ruta de archivos
const path = require("path");

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

//ponemos a escuchar el servidor
app.listen(process.env.PORT || 3000, () => console.log("Servidor corriendo en el puerto http://localhost:3000"));


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
})

app.route("/*").get(function (req, res) {
    return res.sendFile(path.join(__dirname, "./views/register.html"));
})

app.route("/*").get(function (req, res) {
    return res.sendFile(path.join(__dirname, "./views/login.html"));
});


   
    //let htmlPath = path.resolve(__dirname, "./views/index.html");
    //res.sendFile(htmlPath)
    //res.sendFile(path.join(__dirname, "./views/index.html"))     //otra forma de escribir el codigo
    



    
