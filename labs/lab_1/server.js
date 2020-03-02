const net = require('net');


const server = net.createServer( (socket) => {
    socket.setEncoding('utf8')
    socket.on("data", (data) => {
        console.log(data);
        socket.write(reverseString(data))
    });
});

const PORT = 4000;
const LOCALHOST = "127.0.0.1";

server.listen(PORT, LOCALHOST, () => {
    console.log("server is listening");
    
});

function reverseString(string) {
    let reverseString = '';
    for (let i = string.length -1; i >= 0; i--) {
        reverseString += string[i]
    }
    return reverseString;
}