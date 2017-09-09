var app = require('./app/init');

var http = require('http');
var io = require('socket.io');

var server = http.createServer(app);

io = io.listen(server);

io.on('connection', function(client) {
    console.log('Client connected...');

    client.on('join', function(data) {
        console.log(data);
    });

    client.on('messages', function(data){
        client.emit('thread', data);
        client.broadcast.emit('thread', data);
    });
});

server.listen(3030);