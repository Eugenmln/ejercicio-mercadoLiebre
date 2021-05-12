const express = require ("express");
const process = require ("process");
const path = require ("path");
const app = express(); 
const usersRouter = require ("./routes/users")
const mainRouter = require ("./routes/main")
const publicPath = path.resolve(__dirname, "../public")
app.use(express.static(publicPath)); 

app.use("/", mainRouter);
app.use("/users", usersRouter);




//Configuracion del motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//HEROKU
app.listen(process.env.PORT || 3050, () => {
    console.log("El Servidor esta corriendo en el puerto 3050")
})