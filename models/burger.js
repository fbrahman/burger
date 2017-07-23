const orm = require('../config/orm');

const burger = {
	all:function(cb){
		orm.selectAll('burger_db.burgers', function(res){
			cb(res);
		})
	},

	create: function (cols, vals, cb){
		orm.insertOne('burger_db.burgers', cols, vals, function(res){
			cb(res);
		})
	}, 

	update: function(objColVals, condition, cb){
		orm.updateOne('burger_db.burgers', objColsVals, condition, function(res){
			cb(res);
		});
	}
};

module.exports = burger;