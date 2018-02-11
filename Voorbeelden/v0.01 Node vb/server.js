
var app     = require('express')();
var http    = require('http').Server(app);

var request = require('request');

console.log('Server running');






request('GET https://accounts.spotify.com/authorize/?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=http://mysite.com/callback/&state=34fFs29kd09', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body)
    }
})











/*
http.listen(3000, function(){
    console.log('Listening on *:3000');
});

app.get('/', function(req, res){
    var result = {
        "bets":[
            {
                "betId": 1,
                "item": "AWP"
            }
        ]
    };
    res.send(JSON.stringify((result)));
});


io.sockets.on('connection', function(socket) {
    console.log('test');
    connections.push(socket);
    console.log('Connected: %i sockets connected', connections.length);
});*/



function getBlockInfo() {
    console.log('getBlockInfo');
}


const timer = setInterval( getBlockInfo, 5000 );
 //clearInterval(timer);













