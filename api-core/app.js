const express = require('express');
var cors = require("cors");
const app = express ();
app.use(cors());
app.set('view engine', 'ejs');

app.use('/', require('./router'));

app.listen(5000, ()=>{
    console.log('Servidor corriendo en http://localhost:5000')
});