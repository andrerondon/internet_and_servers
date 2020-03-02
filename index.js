// simple tcp server using nodeJS Net module
const net = require('net'); // gives us a bunch of function to create a TCP function

const server = net.createServer(function (socket) {
  socket.on("data", (data) => { // data argument here is the data we're recieving from a request
    console.log('Server recieved Data:');
    console.log(data);
    socket.write('Andre Arrua de Lima')
  });
});

const PORT = 5000;
const LOCALHOST = '127.0.0.1';

server.listen(PORT, LOCALHOST);