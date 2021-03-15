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
  let newstrings = data.split("\n");
  divide(newstrings);
};

divide = (ary) => {
  //   let numeroDeCaracteresInstrucciones = ary[0];

  let numDeCaractrsEnIns1 = ary[0].split(" ")[0];
  let numDeCaractrsEnIns2 = ary[0].split(" ")[1];
  let numCaractrsEnMens = ary[0].split(" ")[2];

  analisis = {
    numDeCaractrsEnIns1: numDeCaractrsEnIns1,
    numDeCaractrsEnIns2: numDeCaractrsEnIns2,
    numCaractrsEnMens: numCaractrsEnMens,
    primerInstruccion: ary[1],
    segundaInstruccion: ary[2],
    mensaje: ary[3],
  };
  console.log(analisis);
};
