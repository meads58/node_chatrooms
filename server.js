var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};

function send404(response) {
  reponse.writeHead(404, {'Content-Type': 'text/plain'});
  reponse.write('Error 404: response not found.');
  reponse.end();
}

this.server = http.createServer(function(req,res) {
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.end();
});

var server = http.createServer

exports.listen = function () {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function (callback) {
  this.server.close(callback);
};

this.server.listen(3000, function() {
  console.log("sever is listenting on port 3000")
})