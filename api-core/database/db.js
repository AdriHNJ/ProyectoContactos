const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contactos_db',
    port: 3310
});

conexion.connect((error)=>{
    if(error){
        console.error('Error de conexion: '+error);
        return
    }
    console.log('¡Conectado a la Base de datos!')
})

module.exports = conexion;