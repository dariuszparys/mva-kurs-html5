var WebSocketServer = require("ws").Server;

var server = new WebSocketServer({port: 8080});

server.on( "connection", function( socket ) {
    socket.on( "message", function( message ) {
        console.log( "Empfangen: %s", message );
        socket.send("Server: " + message );
    });
    socket.send("verbunden");
});

console.log("Server wartet auf ws://localhost:8080");
