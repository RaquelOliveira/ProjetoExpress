module.exports = function(app) {

	var Usuario = app.models.usuarios;

	var UsuarioController = {
		index: function(req, res){
			Usuario.find(function(err,data){
				if(err){
					console.log(err);
				}
				res.render("usuarios/index",{lista : data});
			});
						
		},
		
		create: function(req,res){
			/*var model = new Usuario({
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
			})*/
			res.render("usuarios/create");
		},

		insert: function(req, res){
			var model = new Usuario (req.body);
			Usuario.find({nome:req.body.nome}, function(err, data){
				if(err){
					console.log(err);
				}else{
					//res.render('usuarios/edit', {value: data});
					if(data.length > 0){
						res.render("usuarios/create", {value: "Usuario ja cad"});
					}else{
						model.save(function(err){
							if(err){
								console.log(err);
							}else{
								res.redirect('/usuarios');
							}

						});
					}
					
				}
			});
			/*model.save(function(err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/usuarios');
				}

			});*/
		},

		edit: function(req,res){
			Usuario.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
					res.render('usuarios/edit', {value: data});
					//res.json(data);
				}
			});
		},

		update: function(req,res){
			Usuario.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
					var model   = data;
					model.nome  = req.body.nome;
					model.login = req.body.login;
					model.save(function(err){
						if(err){
							console.log(err);
						}else{
							res.redirect('/usuarios');
						}						
					});
				}
			});

		},  
		show: function(req,res){
			Usuario.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
					res.render('usuarios/show', {value: data});
					//res.end('teste show');
				}
			});
		},
		remove: function(req,res){
			Usuario.remove({_id: req.params.id}, function(err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/usuarios');
				}

			});
		}
	}
	return UsuarioController;
}