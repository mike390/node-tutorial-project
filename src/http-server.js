var express = require('express');
var app = express();

var PORT = 3000;

app.get('/', function (request, response) {
    // insert code here to return something
    response.send();
});

var server = app.listen(PORT, function () {
    console.log('listening on port', PORT);
});

exports.stop = function() {
    server.close();
}