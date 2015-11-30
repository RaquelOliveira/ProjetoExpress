module.exports = function(app) {
	var carona = app.controllers.carona;

	app.get("/carona", carona.index);
	app.get("/carona/create/:id", carona.create);
	app.post('/carona', carona.insert);
	app.get("/carona/edit/:id", carona.edit);
	app.put("/carona/edit/:id", carona.update);

}