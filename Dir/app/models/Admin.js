"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const AdminSchema = new (0, _mongoose.Schema)({
  _id: _mongoose.Schema.Types.ObjectId,
  week: [{}],
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

exports. default = _mongoose.model.call(void 0, 'Admin', AdminSchema);
