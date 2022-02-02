const express = require('express');
const word = require('./word');
const fs = require('fs');

const app = express();
app.use(express.static((__dirname, './')));

app.listen(3000, function () {
    console.log("Server is running on port 3000.");
})

app.get('/', function (req, res) {

    fs.readFile('dict.html', function (err, data) {
        if (err) throw err;
        res.write(data);
        res.end();
    })
})

app.get('/lookup', function(req, res){
    let search = req.query;
    searchword(req, res, search.word);

});

function searchword(req, res, query) {
    var find = function (results) {
        res.setHeader('Content-Type', 'application/json');
        res.json(results);
    };
    word.lookup(query, find);
}