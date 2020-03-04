const http = require("http");
const url = require('url');
const html = require ('./something')


const server = http.createServer((request, response) => { 
  const {pathname, query} = url.parse(request.url, true); 
  console.log(query)
  response.writeHead(200, {'content-type': 'text/html'});
  
  // if (pathname === '/style') {
  //   res.writeHead(200, {'content-type': 'text/css'});
  //   res.write('h1 {color: green; font-size: 50px}')
  // }


  if (pathname === '/calculator') {
    response.write(html)  
    let calc = 0
    if (query.operators === "sum"){
      calc = (parseInt(query.First_Number) + parseInt(query.Second_Number))
    }
    if (query.operators === "multiply"){
      calc = (parseInt(query.First_Number) * parseInt(query.Second_Number))
    }
    if (query.operators === "divide"){
      calc = (parseInt(query.First_Number) / parseInt(query.Second_Number))
    }
    if (query.operators === "subtract"){
      calc = (parseInt(query.First_Number) - parseInt(query.Second_Number))
    }
      response.write(`<main><h1>Result: ${calc}</main>`);
      response.end(); 
  }  
  
  });




const PORT = 5100;
const DOMAIN = 'localhost';
  
  server.listen(PORT, DOMAIN, () => {
    console.log(`Server Calculator App running  ${DOMAIN}:${PORT}`);
  })
