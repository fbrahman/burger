const connection = require('./connection.js');

const orm = {

    // Helper function for SQL syntax.
    _printQuestionMarks: function(num) {
        var arr = [];

        for (var i = 0; i < num; i++) {
            arr.push("?");
        }

        return arr.toString();
    },

    // Helper function for SQL syntax.
    _objToSql: function(ob) {
        var arr = [];

        for (var key in ob) {
            if (Object.hasOwnProperty.call(ob, key)) {
                arr.push(key + "=" + ob[key]);
            }
        }

        return arr.toString();
    },

    selectAll: function(tableInput, cb) {
        let query = `SELECT *
					 FROM ${tableInput};`;

        connection.query(query, function(err, result) {
            if (err) { throw err };

            cb(result);
        })
    },

    insertOne: function(table, cols, vals, cb) {
        let query = `INSERT INTO ?? (??)
					 VALUES (${_printQuestionMarks(vals.length)});`;
        let values = [table, cols.toString(), vals];

        console.log(query, values);

        connection.query(query, values, function(err, result) {
            if (err) { throw err };
            cb(result);
        })
    },

    updateOne: function(table, objColVals, condition, cb) {
        let query = `SET ?
					 WHERE ?;`;

        let values = [_objToSql(objColVals), condition];

        connection.query(query, values, function(err, results) {
            if (err) { throw err };

            cb(result);
        })
    }
};

module.exports= {selectAll: orm.selectAll, 
				 updateOne: orm.updateOne,
				 insertOne: orm.insertOne};
