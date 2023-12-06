const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { dbConection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.donantesPath = "/donantes";
    this.middlewares();
    this.routes();
    this.conectarDB();
  }

  listen = () => {
    this.app.listen(this.port, () => {
      console.log("escuchando en el puerto" + this.port);
    });
  };

  routes() {
    this.app.use(this.donantesPath, require("../routes/donantes"));
  }

  middlewares() {
    this.app.use(cors()); //Indicar el uso de cors
    this.app.use(bodyParser.json()); //Parsear objetos a insertar en la db
  }

  async conectarDB() {
    await dbConection();
  }
}

module.exports = { Server };
