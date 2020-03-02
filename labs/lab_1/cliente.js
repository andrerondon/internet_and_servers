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

const PORT = 4000
const LOCALHOST = '127.0.0.1';
client.connect(PORT, LOCALHOST, () => {
    
    console.log('Client Connected...\n');
    askQuestion()
})

function askQuestion() {
    rl.question('what do you wnat to reverse?', (answer) => {
        // client.write('abcdefg') // sends ábcdefg to the server
        client.write(answer)
        
    })
}