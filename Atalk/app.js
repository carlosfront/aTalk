//framework express eh q permite trabkhar com rotas no node js
const express = require('express')
/* ,routes = require('./routes') */
,load = require('express-load')
,app = express() //Clonar tdo modulo express e passando p/ variavel app. app sera usado p/ carregar o nosso projecto

//app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
/* app.get('/', routes.index); */
/* app.get('usuarios', routes.user.index); */


load('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(8080, () => {
    console.log('Atalk esta no ar');
});

/* var express = require('express')
,routes = require('./routes');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', routes.index);
app.get('/usuarios', routes.user.index);
app.listen(3000, function(){
console.log("Ntalk no ar.");
}); */