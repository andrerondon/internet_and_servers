const net = require("net");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const client = new net.Socket();

client.setEncoding('utf8')
client.on('data', (data) => {
    console.log('\n');
    console.log(data);
    askQuestion();
});

const PORT = 3800
const LOCALHOST = '127.0.0.1';
client.connect(PORT, LOCALHOST, () => {
    
    console.log('Client Connected...\n');
    askQuestion()
})

function askQuestion() {
    rl.question('Please provide numbers comma delimited', (answer) => {
        
        client.write(answer)
        
    })
}

// const net = require('net');
// const server = net.createServer((c) => {
//   // 'connection' listener
//   console.log('client connected');
//   c.on('end', () => {
//     console.log('client disconnected');
//   });
//   c.write('hello\r\n');
//   c.pipe(c);
// });
// server.on('error', (err) => {
//   throw err;
// });
// server.listen(3800, () => {
//   console.log('server bound');
// });
