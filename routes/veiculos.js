module.exports = function(app) {
	var veiculos = app.controllers.veiculos;

	app.get("/veiculos/create/:id", veiculos.create);
	app.post('/veiculos', veiculos.insert);
	app.get("/veiculos/edit/:id", veiculos.edit);
	app.put("/veiculos/edit/:id", veiculos.update);

}