
const path = require("path")

let controller = {
    register:(req,res) =>{
    res.sendFile(path.resolve(__dirname, "../views/register.html"))
},
    login: (req,res) =>{
        res.sendFile(path.resolve(__dirname, "../views/login.html"))
    }
    
}

module.exports = controller;