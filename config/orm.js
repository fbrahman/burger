const connection = require('./connection.js');

const orm = {

    selectAll: function(tableInput, cb) {
        let query = `SELECT *
					 FROM ${tableInput};`;

        connection.query(query, function(err, result) {
            if (err) { throw err };

            cb(result);
        })
    },

    insertOne: function(table, cols, vals, cb) {
        let query = `INSERT INTO ${table} (${cols})
					 VALUES (?);`;
        let values = [vals];

        console.log(query, values);

        connection.query(query, values, function(err, result) {
            if (err) { throw err };
            cb(result);
        })
    },

    updateOne: function(table, eatenBool, burgerID, cb) {
        let query = `UPDATE ${table}
                     SET devoured = ?
					 WHERE id = ?;`;

        let values = [eval(eatenBool), burgerID];

        console.log(query, values);

        connection.query(query, values, function(err, results) {
            if (err) { throw err };

            cb(results);
        })
    }
};

module.exports= {selectAll: orm.selectAll, 
				 updateOne: orm.updateOne,
				 insertOne: orm.insertOne};
