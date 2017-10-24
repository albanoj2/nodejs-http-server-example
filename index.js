const http = require('http');

http.createServer((request, response) => {
    
    const { method, url } = request;
    
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(`{"message": "Received a ${method} request with context path '${url}'"}`);
    response.end();

}).listen(8080);

console.log("Started server");