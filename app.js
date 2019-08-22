var express = require('express');
var app = express();
app.set('view engine', 'ejs')
app.get('/',function(req,res){
    res.render("secao/index.ejs")
});
app.listen(3002, function(){
    console.log("Servidor rodando com Express")
});