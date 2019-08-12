var http = require('http'); // Requisição HTTP
var server = http.createServer(function(req,res){ //Res = Response (Resposta a requisição feita ao servidor)
    var categoria = req.url // Aplicando uma variavel que vai servir de filtro
    if(categoria == '/carros'){ // Checa-se o argumento da requisição
        res.end("<html><body>V8 biturbo</body></html>"); // Pagina para requisição
  
    }
    if(categoria=='/adm'){
        console.log("Informações do Server:",server)
    }
    res.end("<html><body>Portal de noticias</body></html>");
});
server.listen(3000); // Porta atual

/*1 - Podemos afirmar que o nodejs é ?

A - () Um servidor http
B - () Um servidor de programa

    Apessar de se assemelhar a um servidor http, o nodeJS na verdade é uma plataforma de desenvolvimento
baseada no Chrome V8, responsável por interpretar códigos do JavaScript do lado do servidor. 
Logo letra B.

O nodeJs suporta a execução de códigos JavaScript permitindo sua utilização do lado do servidor


2- Qual a vantagem em utilizar o NodeJS ?
A - () Disponibilizar uma maneira mais fácil de desenvolver sistemas de redes escaláveis
B - () O NodeJs é muito mais fácil de se utilizar, com pouquíssimos passos podemos ter um servidor
de páginas web funcionando

Apesar de ser de fácil compreensão, principalmente para programadores JavaScript, esta não é a principal
vantagem do NodeJS Letra A.

O NodeJs possibilita atender a diversas requisições simultâneas sem dar deadlock ou negá-las.

3- Qual a utilidade do comando "console.log()"?

A - () O comando "console.log()" permite imprimir informações de texto e variáveis diretamente no shell.
B - () Ele envia informações para o browser requisitante

Além disso o comando console.log() é utilizado para frequentemente "debugar" erros na aplicação
Letra A.

--------------------------------------------------------------------------------------------------
*/

