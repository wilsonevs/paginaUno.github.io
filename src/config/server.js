const express= require("express");
const path= require("path");
const dotenv= require("dotenv");
const session= require("express-session");

// Inicializar el servidor
const app= express();

// Puerto
app.set('port', process.env.PORT || 3001);

// EJS
app.set('views', path.join(__dirname, '../app/views'));

// MIDDLEWARES
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// DOTENV
dotenv.config({path: path.join(__dirname, '../env/.env')});

// CSS
app.use('/src',express.static(path.join(__dirname,'../public')));

// CONFIGURAR SESSION
app.use(session({
    secret: 'wilson',
    resave: true,
    saveUninitialized: true,
    cookie:{},
}))

module.exports= app;


