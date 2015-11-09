//var http = require('http');
var express = require('express');
//var path = require('path');
var load = require('express-load');
var mongoose = require('mongoose');
//var user = require('./routes/users');
//var routes = require('./routes');

var app = express();

mongoose.connect('mongodb://localhost/projetoExpress', function(err){
	if (err) {
		console.log('Erro ao conectar no mongodb'+err);
	}
});

//app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

load('models').then('controllers').then('routes').into(app);  

app.listen(3000,function(){
	console.log('Servisor rodando na porta 3000 ...');
});

/*http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server rodando na porta ' + app.get('port'));
});*/