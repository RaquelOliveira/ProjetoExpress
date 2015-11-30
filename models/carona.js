module.exports = function(){
	var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var carona = new Schema({
	locais : String,
	origem : String,
	destino : String,
	qtdVagas : String,
	id_veiculo : String,
	id_usuario: String,
	dat: String,
	horario: String
});

return mongoose.model('Carona', carona);

}