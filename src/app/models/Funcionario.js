const { Schema, model } = require('mongoose');

const FuncionarioSchema = new Schema({
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
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = model('Funcionario', FuncionarioSchema);
