describe('HTTP Server', function() {
    var request = require('request');
    var baseUrl = 'http://localhost:3000/';
    var httpServer = require('../src/http-server');
    var sinon = require('sinon');
    var redis = require('redis');

    describe('GET /', function() {
        it('should return a 200 status code', function(done) {
            request.get(baseUrl + 'name/Tom', function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it('should return "Hello World" as JSON', function(done) {
            request.get(baseUrl + 'name/Tom', function(error, response, body) {
                var expectedBody = {
                    message: 'Hello World Tom'
                };

                expect(body).toBe(JSON.stringify(expectedBody));
                done();
            });
        });

        it('should store the name passed in, in Redis', function(done) {
            var setSpy = sinon.spy();
            var fakeRedisClient = {
                SET: setSpy
            }

            var stub = sinon.stub(redis, 'createClient').returns(fakeRedisClient);

            request.get(baseUrl + 'name/Tom', function(error, response, body) {
                expect(stub.calledOnce).toBe(true);
                expect(setSpy.calledOnce).toBe(true);
                redis.createClient.restore();
                done();
            });
        });
    });

    describe('POST /', function() {
        it('should allow POST requests', function(done) {
            request.post(baseUrl, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
    });

    it('should stop the server', function(done) {
        httpServer.stop();
        done();
    });
});