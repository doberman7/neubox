const http = require("http");
// Requiring fs module in which
// readFile function is defined.
const fs = require("fs");

fs.readFile("Input.txt", (err, data) => {
  if (err) throw err;

  console.log(data.toString());
});

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
