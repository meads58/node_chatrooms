var server = require('../server');
var assert = require('assert');
var http = require('http');

describe('server', function() {
  before(function() {
    server.listen(3000);
  });

  after(function() {
    server.close();
  });

  describe('/', function() {
    it('should return 200 for a valid page', function(done){
      http.get('http://localhost:3000', function(res){
        assert.equal(200, res.statusCode);
        done();
      })
    })
  })

});