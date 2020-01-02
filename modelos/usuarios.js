var mysql = require('mysql');

function getListaUsuarios(req,res){
    
    conectar().connect(function(err){
        if (err) throw err;
        var sql="select idProfesor from profesores";// where nombreCorto='"+profesor.nombreCorto+"'";
        var result=connect.query(sql, function (err, result, fields){
            res.json({result});
        });
    });
    
}
function getUsuario(req,res){

}
function crearUsuario(req,res){

}

function conectar(){
    var con = mysql.createConnection({
        host     : 'micasa82.ddns.net',
        port     : '1106',
        user     : 'vpalomo',
        password : '123456',
        database : 'colsan'
    });
    return con;
}
module.exports={
    getListaUsuarios,
    getUsuario,
    crearUsuario
}