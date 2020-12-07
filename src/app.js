const express = require('express');
const routes = require('./routes');
const cors = require("cors");

require('./database');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  cors() {
    this.server.use((req, res, next) => {

      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type,  Accept,  Authorization"
      );

      this.server.use(cors());
      this.server.options("*", cors());
    
      next();
    });
  }
}

module.exports = new App().server;
