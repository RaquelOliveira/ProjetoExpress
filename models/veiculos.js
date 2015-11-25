module.exports = function(){
	var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var veiculo = new Schema({
	modelo : String,
	marca : String,
	placa : String,
	cor : String,
	id_usuario: String
});

return mongoose.model('Veiculos', veiculo);

}