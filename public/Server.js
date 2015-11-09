var http = require("http");
var fs = require("fs");
var server = http.createServer(function (request, response) {
    fs.readFile('index.html', function (err, data) {
        response.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
        response.write(data);
        response.end();
    });
});
server.listen(3000);
console.log("Server is listening");
