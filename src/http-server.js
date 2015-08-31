var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var redis = require('redis');

var PORT = 3000;

app.configure(function() {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json());
});

app.get('/name/:name', function (request, response) {
    var name = request.params.name;

    var body = {
        message: 'Hello World ' + name
    };

    saveToRedis('name', name);

    response.send(body);
});

function saveToRedis(key, value) {
    var redisClient = redis.createClient();

    redisClient.SET(key, value);

    redisClient.quit();
}

app.post('/', function (request, response) {
    response.send('Post successful');
});

var server = app.listen(PORT, function () {
    console.log('http server listening on port', PORT);
});

exports.stop = function() {
    console.log('stopping server');
    server.close();
};