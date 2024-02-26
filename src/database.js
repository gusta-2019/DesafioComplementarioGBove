const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://gusmza2005:TT003658@cluster0.s4r8tld.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("La Conexion fue exitosa"))
    .catch(() => console.log("Error en la conexion"))

