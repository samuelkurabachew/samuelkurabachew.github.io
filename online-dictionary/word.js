const db = require('mysql');
const connection = db.createConnection({
    host: "localhost",
    user: "root",
    database: "entries"
});
connection.connect(function (err) {
    if (err) throw err;

})
exports.lookup = function search(query, find) {

    var statement = "SELECT * FROM entries WHERE word LIKE '" + query + "'";
    connection.query(statement, function (err, result) {
        if (err) throw err;
        return find(result);
    })


}