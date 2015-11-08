var http = require('http');
var express = require('express');
var path = require('path');
var load = require('express-load');
//var user = require('./routes/users');
//var routes = require('./routes');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

load('models').then('controllers').then('routes').into(app);  
//app.get('/', routes.index);
//app.get('/user', user.list);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server rodando na porta ' + app.get('port'));
});