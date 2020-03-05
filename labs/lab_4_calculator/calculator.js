const http = require("http");
const url = require('url');
const html = require ('./html')
const qs = require ('query-string');


const server = http.createServer((request, response) => { 
  const {pathname, query} = url.parse(request.url, true); 
  console.log(query)
  console.log(pathname)
  
  response.writeHead(200, {'content-type': 'text/html'});
  let body = '';
    request.on('data', (chunk) => {
      body += chunk;   
      console.log(body);
     
    })
    request.on('end', () => {  
      request.body = qs.parse(body);
      const resource = `${request.method} ${pathname}`;
      console.log(resource)
      if (resource === ' GET /style') {
        response.writeHead(200, {'content-type': 'text/html'});
        response.write('h1 {color: green; font-size: 50px}')
      }
      
      if (resource === 'GET /'){
        response.write('<div>this is root<div>');
        return response.end()
      }
      
      if (resource === 'POST /calculator') {
        let calc = 0
        console.log("wheeee are here");
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
        response.write(html) 
        response.write(`<main><h1> Result: ${calc}</main>`);
        response.write(`<main><h1 style="color:red">Your Image </h1><img src="${request.body.imageLink}"></main>`);
        return response.end()    
      }  
      
      if (resource === 'GET /calculator') {
        response.write(html) 
        return response.end()
      }
    })
    

 
  
});

//  <link rel="stylesheet" type="text/css" href="theme.css">


const PORT = 6500;
const DOMAIN = 'localhost';
  
  server.listen(PORT, DOMAIN, () => {
    console.log(`Server Calculator App running  ${DOMAIN}:${PORT}`);
  })