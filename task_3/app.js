var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.listen(8080, function() {
    console.log('server is working');
});

app.get('/get1', function(req, res) {
    res.send('Get1 Answer');
});

app.get('/get2', function(req, res) {
    res.send('Get2 Answer');
});

app.get('/get3', function(req, res) {
    res.send('Get3 Answer');
});


