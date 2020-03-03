const net = require('net');


const server = net.createServer( (socket) => {
    socket.setEncoding('utf8')
    socket.on("data", (data) => {
        console.log(data);
        socket.write(largestNumber(data))
    });
});

const PORT = 3800;
const LOCALHOST = "127.0.0.1";

server.listen(PORT, LOCALHOST, () => {
    console.log("server is running");
    
});

function largestNumber(string){
    const newArr = string.split(",")
    let max = 0;
    for (let i = 0; i <  newArr.length; i++){
        if(parseInt(newArr[i]) > max){
            max = parseInt(newArr[i]);
        }

    }
return max
}


