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
  let newstrings = data.split("\n"); //extract txt file con
  let txtFileContet = divide(newstrings); //devuelve obj ordenado
  let {
    mensaje,
    numDeCaractrsEnIns1,
    numDeCaractrsEnIns2,
    numCaractrsEnMens,
    primerInstruccion,
    segundaInstruccion,
  } = txtFileContet;
  let mensajeLimpio = cleanMensaje(mensaje);
  let firstLine = thereIsAHiddenInstruction(
    mensajeLimpio,
    primerInstruccion,
    numDeCaractrsEnIns1
  );
  let secondLIne = thereIsAHiddenInstruction(
    mensajeLimpio,
    segundaInstruccion,
    numDeCaractrsEnIns2
  );

  fs.writeFile(
    "Output.txt",
    `${firstLine} \n` + `${secondLIne}`,
    function (err) {
      if (err) return console.log(err);
    }
  );
};

thereIsAHiddenInstruction = (message, instruction, numCaracters) => {
  //   console.log(Number(numCaracters) === instruction.length);
  return message.join("").includes(instruction) ? "SI" : "NO";
};

cleanMensaje = (mensaje) => {
  let mensajeClean = [];
  mensaje.split("").forEach((element, index) => {
    element === mensaje[index + 1] ? null : mensajeClean.push(element);
  });
  return mensajeClean;
};

divide = (ary) => {
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
  return analisis;
};
