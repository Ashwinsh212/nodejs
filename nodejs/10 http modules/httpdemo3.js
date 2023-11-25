var http = require("http");
var serverInstance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("url : "+request.url);
    response.write("<br>method : "+request.method);
    response.write("<br>headers : "+request.headers.host);
    response.end();
});

serverInstance.listen(3000,()=>{
    console.log("server connection successfull");    
});