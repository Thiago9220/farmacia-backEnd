"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

// const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.mongoConnection = _mongoose2.default.connect(
      'mongodb+srv://Thiagodickzao:142536@cluster0.eaqd4.mongodb.net/FarmaciaDB?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    );
  }
}

exports. default = new Database();
