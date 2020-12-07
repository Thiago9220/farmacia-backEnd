const { Schema, model } = require('mongoose');

const ClienteSchema = new Schema({
  _id: Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  telefone: {
    type: String,
    required: true,
  },
});

module.exports = model('Cliente', ClienteSchema);