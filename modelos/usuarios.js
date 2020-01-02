var mysql = require('mysql');

function getListaUsuarios(req,res){
    res.json({nombre:"Lista de usuarios"});
}
function getUsuario(req,res){

}
function crearUsuario(req,res){

}
module.exports={
    getListaUsuarios,
    getUsuario,
    crearUsuario
}