const mongoose = require('mongoose');
// const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.mongoConnection = mongoose.connect(
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

module.exports = new Database();
