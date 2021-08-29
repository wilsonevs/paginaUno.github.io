const mysql= require("mysql");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE
});

//probar el modulo:

connection.connect((err) => {
    if(err){
        console.log("El error de conexion a BD es: " + err)
        // return res.redirect('./500.ejs');
    }
    console.log("Conectado exitosamente a BD");
})

module.exports = connection;
