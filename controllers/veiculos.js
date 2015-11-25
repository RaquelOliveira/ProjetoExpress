module.exports = function(app) {

	var veiculos = app.models.veiculos;

	var VeiculosController = {

		create: function(req,res){
			var id = req.params.id;
			if(id!=null){
				veiculos.find({id_usuario:id},function(err,data){
					if(err){
						console.log
					}else{
						if(data.length>0){
						//	res.render('veiculos/editar',{value:data});
						}else{
							res.render("veiculos/create", {value:id});
						}
					}
				});
				
			}else{
				res.end ('voce precisa está logado no sistema');
			}
			
		},

		insert: function(req, res) {
			var model = new veiculos (req.body);
				model.save(function(err){
					if (err) {
						console.log(err);
					} else {
						res.render("veiculos/create");
					}
				});
		},
		
		edit: function(req,res){
			var id = req.params.id;
			veiculos.find({id_usuario:id},function(err,data){
				if(err){
					console.log;
				}else{
					if(data.length > 0){
						//res.json(data);
						res.render("veiculos/edit",{value:data[0]});
					}else{
						res.render("veiculos/create", {value:id});
					}
				}

			});
			
		},

		update:function(req,res){
			veiculos.findById(req.params.id, function(err,data){
				if(err){
					console.log;
				}else{
					var model = data;
					model.marca = req.body.marca;
					model.modelo = req.body.modelo;
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
	return VeiculosController;
}