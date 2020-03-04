const http = require('http');

const httpServer = http.createServer((request, response) => {
  console.log(request.path);
  console.log(request.params);
  console.log(request.url);
  // request is a object that represents the HTTP request being made
  // response is an object that contains methods we can use to create a HTTP response back
  response.end('<h1 style="color: blue;">Welcome Home</h1>');
})

const PORT = 3880;
const DOMAIN = 'localhost';

httpServer.listen(PORT, DOMAIN, () => {
  console.log(`Server is listing at ${DOMAIN}:${PORT}`);
})
//