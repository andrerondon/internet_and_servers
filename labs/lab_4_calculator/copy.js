const http = require("http");
const url = require('url');
// const html = require ('./calc');
// const newhtml = require ('./')
const fs = require ('fs');


const server = http.createServer((request, response) => { 
  const {pathname, query} = url.parse(request.url, true); 
  console.log(query)
  console.log(pathname)

  
  // if (pathname === '/style') {
  //   res.writeHead(200, {'content-type': 'text/css'});
  //   res.write('h1 {color: green; font-size: 50px}')
  // }


  if (pathname === '/calculator') {
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
    response.write(`<main><h1> Result: ${calc}</main>`);
        // response.write(`${html}`)
       
        // response.end(); 

        // response.sendFile('/calc2.html')

        fs.readFile('./calc.html', 'utf8', function(error, data){
          if(error){
            console.log('error:', error);
            response.writeHead(400);
            response.end();
          } else{
            console.log('file is being sent');
            response.writeHead(200, {'content-type': 'text/html'});
            response.end(data);
          }
        })
       
  }  
  
  });

//  <link rel="stylesheet" type="text/css" href="theme.css">


const PORT = 6500;
const DOMAIN = 'localhost';
  
  server.listen(PORT, DOMAIN, () => {
    console.log(`Server Calculator App running  ${DOMAIN}:${PORT}`);
  })
