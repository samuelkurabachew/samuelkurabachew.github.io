var db = require('mysql');
var con = db.createConnection({
    host: "localhost",
    user: "root",
    database: "entries"
});
con.connect(function (err) {
    if (err) throw err;

})
exports.lookup = function search(query, find) {

    var statement = "SELECT * FROM entries WHERE word LIKE '" + query + "'";
    con.query(statement, function (err, result) {
        if (err) throw err;
        return find(result);
    })


}