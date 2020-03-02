const net = require('net');

const client = new net.Socket();

// when the client recieves data log it out
client.setEncoding('utf8')
client.on('data', function(data) {
  console.log('client recieved data:')
  console.log(data);
})

const PORT = 5000;
const LOCALHOST = '127.0.0.1';
client.connect(PORT, LOCALHOST, function() {
  client.write('Andre Arrua de Lima Rondon')
})