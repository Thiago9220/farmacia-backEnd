import { Schema, model } from 'mongoose';

const AdminSchema = new Schema({
  _id: Schema.Types.ObjectId,
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

export default model('Admin', AdminSchema);
