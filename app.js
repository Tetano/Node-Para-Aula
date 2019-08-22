var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("<html><body><h4>INDEX</h4></body></html>")
});

app.get('/nativas',function(req,res){
    res.send("<html><body><h4>Pessoas</h4></body></html>")
});

app.get('/arvores',function(req,res){
    res.send("<html><body><h4>Pequi,Cajuí</h4></body></html>")
});

app.listen(3000, function(){
    console.log("Servidor rodando com Express")
});