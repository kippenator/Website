
//var getExpresss = require('express');
var app     = require('express')();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);

connections = [];


console.log('server script running');



http.listen(3000, function(){
    console.log('API listening on *:3000');
});

app.get('/bets', function(req, res){
    var result = {
        "bets":[
            {
                "betId": 1,
                "item": "AWP"
            },
            {
                "test": 2,
                "test": "test",
            }
        ]
    };
    res.send(JSON.stringify((result)));
});


io.sockets.on('connection', function(socket) {
    console.log('test');
    connections.push(socket);
    console.log('Connected: %i sockets connected', connections.length);
});





















