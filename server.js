const PORT = process.env.PORT || 5000

// Using express: http://expressjs.com/
var express = require('express');
// Create the app
var app = express();
// set up the server
//var server = app.listen(PORT, listen);
var server = require('http').Server(app);
server.listen(PORT);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Using socket.io for comms
var io = require('socket.io')(server);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
  // We are given a websocket object in our function
  function (socket) {

    console.log("We have a new client: " + socket.id);

    // When this user emits, client side: socket.emit('otherevent',some data);
    socket.on('send',
      function(data) {
        // Data comes in as whatever was sent, including objects
        console.log("Received: " + data.x);
  			// Send that object to the everyone except sender
  			socket.broadcast.emit('get', data);
      }
    );

    socket.on('disconnect', function() {
      console.log("Client has disconnected");
    });
  }
);

