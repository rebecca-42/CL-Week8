const PORT = 8000;

let express= require('express');
let app = express();

let http = require('http');
let server = http.createServer(app);

server.listen(port, () => {
  console.log("Server listening at port: ", PORT);
});

app.use('/', express.static('public'));

let io = require('socket.io');
io = new io.Server(server);

io.sockets.on('connect', function(socket) {
  console.log("New connection: " + socket.id);

  //Listen for a message named 'data' from this client
  socket.on('data', function(data) {
      //Data can be numbers, strings, objects
      console.log("Received: 'data' " + data);

      //Send the data to all clients, including this one
      //Set the name of the message to be 'data'
      io.sockets.emit('data', data);
  });

    socket.on('disconnect', function() {
      console.log("A client has disconnected: " + socket.id);
    });
});