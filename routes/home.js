module.exports = function(app){
	var home = app.controllers.home;
	var usuarios = app.controllers.usuarios;
	
	app.get('/', home.index);
	app.get("/usuarios/create", usuarios.create);
}