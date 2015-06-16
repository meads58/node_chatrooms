var expect = require('expect.js')
var http = require('http');
var request = require('superagent')
var server = require('../server');
var chat = require('../lib/chat_server')

describe('server', function() {

  it("should return a 200 response for a valid page", function (done) {

    request.post('localhost:3000').end(function(err,res){
      expect(res.status).to.equal(200);
      done();
    })
  });

  it("should return a 404 reponse for an invalid page", function (done) {
    request.post('localhost:3000/notvalidpage').end(function(err, res) {
      expect(res.status).to.equal(404);
      done();
    })
  });

  it("should return a 404 error message for an invalid page", function (done) {
    request.post('localhost:3000/notvalidpage').end(function(err, res) {
      expect(res.text).to.equal('Error 404: response not found.')
      done();
    })
  });

});

describe('chat_server', function() {
  it("assigns a guest's name", function() {
    //chat.listen();
    console.log('test' + chat.getGuestNumber())
  })
})


