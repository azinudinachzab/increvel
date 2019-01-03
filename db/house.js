const knex = require('./connection');

module.exports = {

	get: function() {
	return knex('house');
  	},
	getIdAll: function(){
		return knex.select('id_rumah').from('house');
	},
	getId: function(id) {
    return knex('house').where('id_rumah',id).first();
	}

}
