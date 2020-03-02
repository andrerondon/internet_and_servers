const net = require('net');


const client = new net.Socket();

client.on('data', (data) => {
    console.log(data);
});

const PORT = 3800
const LOCALHOST = '127.0.0.1';

client.connect(PORT, LOCALHOST, () => {
    console.log(" the client is connected to a server...\n");
    client.write('Andre Arrua de Lima Rondon')

})