const mongoose = require('mongoose');
const Funcionario = require('../models/Funcionario');

class AdminController {
  // Lista Funcionario
  async show(req, res, next) {
    const funcionario = await Funcionario.findById(req.params.id);

    if(!funcionario) {
      return res.status(401).json({
        error: 'Funcionario não encontrado',
      });
    }

    return res.status(200).json(funcionario);
  }

  // Criar Funcionario

  async store(req, res, next) {
    const { nome, cpf, email, senha, telefone } = req.body;
    const funcionario = new Funcionario({
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

  async update(req, res, next) {
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

  async delete(req, res, next) {
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

module.exports = new AdminController();
