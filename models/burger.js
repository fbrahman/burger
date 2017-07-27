const orm = require('../config/orm');

const burger = {
	all:function(cb){
		orm.selectAll('burgers_db.burgers', function(res){
			cb(res);
		})
	},

	create: function (vals, cb){
		orm.insertOne('burgers_db.burgers', 'burger_name', vals, function(res){
			cb(res);
		})
	}, 

	update: function(objColsVals, condition, cb){
		orm.updateOne('burgers_db.burgers', objColsVals, condition, function(res){
			cb(res);
		});
	}
};

module.exports = burger;