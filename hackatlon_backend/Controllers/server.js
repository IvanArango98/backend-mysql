const express = require('express')
const router = express.Router()
const mysql = require('mysql');
const cors = require("cors")
const crypto = require("crypto");

router.use(express.json())
router.use(express.urlencoded({extended : false}))
router.use(cors())

const configurate = {
    host: 'localhost'    ,
    user: 'root',
    password: '1234',
    database: 'hackatlon',    
}

const db = mysql.createConnection(configurate);

exports.Read = function(req,res,next) {                       

    let ID_Empresa =  (typeof req.body.ID_Empresa == 'undefined') ? 0 : req.body.ID_Empresa
    let ID_Metodo_Pago =  (typeof req.body.ID_Metodo_Pago == 'undefined') ? 0 : req.body.ID_Metodo_Pago     
    let ID_Usuario =   (typeof req.body.ID_Usuario == 'undefined') ? 0 : req.body.ID_Usuario
    let ID_Promocion =   (typeof req.body.ID_Promocion == 'undefined') ? 0 : req.body.ID_Promocion
    let ID_Detalle =  (typeof req.body.ID_Detalle == 'undefined') ? 0 : req.body.ID_Detalle    
    let Transaccion =   (typeof req.body.Transaccion == 'undefined') ? "" : req.body.Transaccion

    db.query("call consultas(?,?,?,?,?,?)", [
        ID_Empresa, 
        ID_Metodo_Pago,
        ID_Usuario,
        ID_Promocion,
        ID_Detalle,
        Transaccion], 
    function (err, result) {
        if (err) {
            res.send(JSON.stringify({err: err}))               
        } else {            
            res.send(JSON.stringify(result[0]))   
        }    
    });

}