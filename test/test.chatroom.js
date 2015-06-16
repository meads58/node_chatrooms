
var assert = require('chai').assert;
var expect = require('expect.js')
var http = require('http');
var request = require('superagent')
var rr = require('supertest')
var server = require('../server');


describe('server', function() {
  beforeEach(function() {
    server;
  });

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


