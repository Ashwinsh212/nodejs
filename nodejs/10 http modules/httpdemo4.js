var http = require("http");
var serverInstance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    if(request.url=='' || request.url=='/'){
        response.write("<h1>Home Page</h1>");
        response.end();
    }
    else if(request.url=='/about'){
        response.write("<h1>About Page</h1>");
        response.end();
    }
    else if(request.url=='/contact'){
        response.write("<h1>Contact Page</h1>");
        response.end();
    }
});

serverInstance.listen(3000,()=>{
    console.log("server connection successfull");    
});