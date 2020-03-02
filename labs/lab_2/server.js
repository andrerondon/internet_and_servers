const net = require('net');

const server = net.creatServer( (socket) => {
    socket.on('data', (data) =>{
        console.log(data);
        socket.write(data =>{

        })
        
    });
});

const PORT = 4500;
const LOCALHOST = "127.0.0.1";

server.listen(PORT, LOCALHOST, () => {
    console.log("server is runnin");
    
});