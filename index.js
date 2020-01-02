//para hacer pruebas de servicios rest hecho con node y express

var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    usuarios=require("./modelos/usuarios");

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

router.get('/', usuarios.getListaUsuarios);

router.get('/libros', function(req, res) {  
   
    res.json({nombre:"libros"});
});

router.get('/libros/:id', function(req, res) {  
   res.json({nombre:req.params.id});
});

app.use(router);

app.listen(3000, function() {  
  console.log("Node server running on http://localhost:3000");
});