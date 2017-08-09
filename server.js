var http = require('http');
var express = require('express');

var app = express();

app.disable('x-powered-by');
app.set('port', 8000);

app.get('/', function(req, res) {
	res.send('Express works');
});

app.listen(app.get('port'), function() {
	console.log('Server running at http://localhost:8000');
});
