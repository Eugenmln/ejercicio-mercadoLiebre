const express = require ("express");
const process = require ("process");
const path = require ("path");
const app = express(); 

const publicPath = path.resolve(__dirname, "./public")
app.use(express.static(publicPath)); 

app.listen(process.env.PORT || 3050, () => {
    console.log("El Servidor esta corriendo en el puerto 3050")
})

app.get("/", (req,res) =>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/register", (req,res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get("/login", (req,res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})