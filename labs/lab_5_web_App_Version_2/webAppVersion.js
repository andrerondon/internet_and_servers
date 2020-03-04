const http = require ('http');
const url = require('url');

// console.log(url);

const server = http.createServer((request, response) => {
    // response.write('<h1>Welcome to new APP</h1>');
    const {pathname, query} = url.parse(request.url, true); // url.parse returns an object that has "pathname" and "query" as keys so we can deconstruct them like that
    response.writeHead(200, {'content-type': 'text/html'});
    console.log(query)
    console.log(pathname);
    

    if (pathname === '/'){
      console.log("whe are here");
      response.write('<div>this is root>/<div>');
      return response.end()
    }

    if (pathname === '/image'){
      response.write("<main><h1>THANK YOU TO SUBMIT!</h1></main>");
      
      // response.write("<main><h1>THANK YOU TO SUBMIT!</h1><img src='https://media.giphy.com/media/7kn27lnYSAE9O/giphy.gif'></main>");
      return response.end()
    }
    if (pathname === '/welcome'){
      response.write('<h1>HELLLLLLLLLLLLLLLOOOOOOOOOOOOOOO</h1>');
      return response.end()
    }

    if (pathname === '/view_image'){
      
      response.write(
        // "<html>" +
        //   "<head>" +
        //     "<link rel='stylesheet' type='text/css' href='/stylesheet'>" +
        //   "</head>" +
            "<main>" +
              "<h1> FORM </h1>" +
                "<form action='/view_image'' method = 'POST' >" +  // that is paht to thank you
                    "<label for='firstname'>firstname</label>" +
                    "<input type='text' name='firstname'/>" +
                    "<br>" +
                    "<label for='question'>question</label>" +
                    "<textarea type='text' name='question'></textarea>" +
                    "<br>" +
                    "<input type='submit' value='submit'/>" +
                "</form>" +
            "</main>"+
       "</html>"
      )
      return response.end();
    }
    

  });


const PORT = 1133;
const DOMAIN = 'localhost';

server.listen(PORT, DOMAIN, ()=>{
  console.log(`server is runing on ${DOMAIN}:${PORT}`);
  
})