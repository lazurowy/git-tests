// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  console.log("loaded!");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
  if (true) {
    console.log("Request ended.");
    console.log("But execution does not");
    console.log("so I can do some other change :).");
  } else {
    console.log("Never happens");
  }
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
