const express = require('express');
const router = express.Router();

const conexion = require('./database/db');


router.get('/', (req, res)=>{
 res.json({result:"OK"});
})

router.get('/contactos', (req, res)=>{
    conexion.query('SELECT * FROM contactos', (error, results)=>{
        if (error) {
            throw error;
        } else {
            res.status(201).json({results:results});
        }
    })
})

router.get('/contacto/:id', (req, res)=>{
    conexion.query('SELECT * FROM contactos where id='+req.id, (error, results)=>{
        if (error) {
            throw error;
        } else {
            res.status(200).json({results:results});
        }
    })
})



router.get('/contactoUpdate/:id', (req, res)=>{
    conexion.query('SELECT * FROM clientespotenciales where id='+req.id, (error, results)=>{
        if (error) {
            throw error;
        } else {
            res.status(200).json({results:results});
        }
    })
})
router.post('/contactoCreate/:id', (req, res)=>{
    conexion.query('SELECT * FROM clientespotenciales where id='+req.id, (error, results)=>{
        if (error) {
            throw error;
        } else {
            res.status(200).json({results:results});
        }
    })
})

router.get('/contactoDelete/:id', (req, res)=>{
    conexion.query('SELECT * FROM clientespotenciales where id='+req.id, (error, results)=>{
        if (error) {
            throw error;
        } else {
            res.status(201).json({results:results});
        }
    })
})


router.post('/contactoImport', (req, res)=>{

    conexion.query('SELECT * FROM clientespotenciales where id='+req.id, (error, results)=>{
        if (error) {
            throw error;
        } else {
            res.status(201).json({results:results});
        }
    })
})
module.exports = router;