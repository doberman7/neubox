const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/plain");
  //   res.end("Hello World");
});

server.listen(port, hostname, () => {
  //   console.log(`Server running at http://${hostname}:${port}/`);
});

fs.readFile("Input.txt", (err, data) => {
  if (err) throw err;
  let datos = data.toString();
  analize(datos);
  server.close();
});

analize = (data) => {
  //   console.log(data);
  let newstrings = data.split("\n");
  console.log(newstrings);
};
