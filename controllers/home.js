module.exports = function(app) {
	
	var HomeController = {
		index: function(req, res){
			//res.render('home/index');
			res.render('usuarios/create');
		}
	}
	
	return HomeController;
}