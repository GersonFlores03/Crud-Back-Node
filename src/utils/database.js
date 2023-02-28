const { Sequelize } = require("sequelize")

const db = new Sequelize({
    database: "todo_crud",
    port: 5432,
    host: "localhost",
    username: "postgres",
    password: "gerflores",
    dialect: "postgres",

})

module.exports= db;