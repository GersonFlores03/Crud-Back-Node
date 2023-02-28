const express = require("express")
const cors = require("cors")
const db = require("./utils/database")
const Todos = require("./models/todo.models")
const todoRouter = require("./router/todo.router")

Todos;

const PORT = 8006;


db.authenticate()
.then(()=>{
    console.log("Conexion a la base de Datos OK")
})
.catch((error) =>{
    console.log("Error en la base de datos " , error)
})

db.sync()
.then(()=>{
    console.log("Conexion en el servidor")
})
.catch((error)=>{
    console.log(error)
})

const app = express();
app.use(cors())
app.use(express.json())
app.use(todoRouter)



app.listen(PORT , () =>{
    console.log(`Servidor Abierto en el puerto ${PORT}`) 
})