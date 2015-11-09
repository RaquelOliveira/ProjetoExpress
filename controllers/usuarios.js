module.exports = function(app) {

	var Usuario = app.models.usuarios;

	var UsuarioController = {
		index: function(req, res){
			res.render("usuarios/index");
		},

		create: function(req,res){
			var model = new Usuario({
				nome:'Raquel',
				login: 'raquel',
				senha: '123456'
			});

			model.save(function(erro,data){
				if(erro){
					console.log(erro);
				}else{
					res.json(data);
				}
			})
		},

		lista : function(req,res){
			Usuario.find(function(erro,data){
				if(erro){
					console.log(erro);
				}else{
					res.json(data);
				}

			});
		}
	}
	return UsuarioController;
}