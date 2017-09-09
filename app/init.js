var express = require('express');

var app = express();

app.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/views/index.html')
});

app.use(express.static('app/public'));

module.exports = app;