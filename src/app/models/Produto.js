const { Schema, model } = require('mongoose');

const ProdutoSchema = new Schema({
  _id: Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true,
  },
  dataValidade: {
    type: String,
    required: true,
  },
  preco: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  }
});

module.exports = model('Produto', ProdutoSchema);