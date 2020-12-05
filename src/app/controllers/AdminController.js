import mongoose from 'mongoose';
import Funcionario from '../models/Admin';

class AdminController {
  // Lista Funcionario
  async show(req, res) {
    const funcionario = await Funcionario.findById(req.params.id);
    return res.status(200).json(funcionario);
  }

  // Criar Funcionario

  async store(req, res) {
    const { nome, cpf, email, senha, telefone } = req.body;
    const funcionario = new Funcionario({
      _id: new mongoose.Types.ObjectId(),
      nome,
      cpf,
      email,
      senha,
      telefone,
    });
    await funcionario.save();
    return res.status(201).json(funcionario);
  }

  // Atualizar Funcionario

  async update(req, res) {
    const funcionario = await Funcionario.findById(req.params.id);
    if (!funcionario) {
      return res.status(401).json({
        error: 'Funcionario não encontrado',
      });
    }

    const { nome, cpf, email, senha, telefone } = req.body;
    await funcionario.updateOne({
      nome,
      cpf,
      email,
      senha,
      telefone,
    });

    return res.status(200).json(funcionario);
  }

  // Deletar Funcionario

  async delete(req, res) {
    const funcionario = await Funcionario.findById(req.params.id);
    if (!funcionario) {
      return res.status(401).json({
        error: 'Funcionario não encontrado',
      });
    }

    await funcionario.deleteOne();

    return res.status(200).json(funcionario);
  }
}

export default new AdminController();
