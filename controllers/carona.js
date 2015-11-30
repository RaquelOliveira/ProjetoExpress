module.exports = function(app) {

	var carona = app.models.carona;
	var usuarios = app.models.usuarios;
	var veiculos = app.models.veiculos;

	var CaronaController = {

		index: function(req, res){
			carona.find(function(err,data){
				if(err){
					console.log(err);
				}
				res.render("carona/index",{lista : data});
			});

						
		},

		create: function(req,res){
			var id = req.params.id;
			if(id!=null){
				usuarios.find({_id:id},function(err,data){
					if(err){
						console.log(err);
					}else{
						veiculos.find({id_usuario:id},function(err,dataVeiculos){
							if(err){
								console.log(err);
							} else {
								data = data.concat(dataVeiculos);
								res.render("carona/create", {value : data});
							}
						});
					}
				});
				
			}else{
				res.end ('voce precisa está logado no sistema');
			}
			
		},

		insert: function(req, res) {
			var model = new carona ();
			model.locais = req.body.locais;
			model.origem = req.body.origem;
			model.destino = req.body.destino;
			model.qtdVagas = req.body.qtdVagas;
			model.id_usuario = req.body.id_usuario;
			model.id_veiculo = req.body.id_veiculo;
			model.dat = req.body.dat;
			model.horario = req.body.horario;

				model.save(function(err){
					if (err) {
						console.log(err);
					} else {
						res.render("carona/create");
					}
				});
		},
		
		edit: function(req,res){
			var id = req.params.id;
			carona.find({id_usuario:id},function(err,data){
				if(err){
					console.log;
				}else{
					if(data.length > 0){
						//res.json(data);
						res.render("carona/edit",{value:data[0]});
					}else{
						res.render("carona/create", {value:id});
					}
				}

			});
			
		},

		update:function(req,res){
			carona.findById(req.params.id, function(err,data){
				if(err){
					console.log;
				}else{
					var model = data;
					model.locais = req.body.locais;
					model.origem = req.body.origem;
					model.destino = req.body.destino;
					model.qtdVagas = req.body.qtdVagas;
					model.save(function(err){
						if(err){
							console.log
						}else{
							res.end('ok');
							//res.render("/usuarios");
						}

					});
				}

			});
		} 
	}
	return CaronaController;
}