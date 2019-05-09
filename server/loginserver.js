var socket = require( 'socket.io' );
var express = require( 'express' );
var app = express();

var server = app.listen( 8186, function() {
  console.log( 'WIFI Chat auf Port 8400' );
});

/* Server HTTP */
app.use( express.static('src') );
app.get( '/', function( reqs, res) {
  res.sendFile( __dirname + '/src/index.html' );
});