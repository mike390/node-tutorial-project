describe('HTTP Server', function() {
    var request = require('request');
    var baseUrl = 'http://localhost:3000/';
    var httpServer = require('../src/http-server');

    describe('GET /', function() {
        it('should return a 200 status code', function(done) {
            request.get(baseUrl, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it('should return "Hello World"', function(done) {
            request.get(baseUrl, function(error, response, body) {
                expect(body).toBe('Hello World');
                done();
            });
        });
    });

    it('should stop the server', function(done) {
        httpServer.stop();
        done();
    });
});