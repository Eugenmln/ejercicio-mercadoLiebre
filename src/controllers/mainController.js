
const path = require("path")

let controller = {
    home:(req,res) =>{
        res.sendFile(path.resolve(__dirname, "../views/home.html"))
    
    }
    
}

module.exports = controller;