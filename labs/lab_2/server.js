const net = require('net');


const server = net.createServer( (socket) => {
    socket.setEncoding('utf8')
    socket.on("data", (data) => {
        console.log(data);
        socket.write(data)
    });
});

const PORT = 3800;
const LOCALHOST = "127.0.0.1";

server.listen(PORT, LOCALHOST, () => {
    console.log("server is running");
    
});

