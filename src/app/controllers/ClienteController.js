const mongoose = require('mongoose');
const Cliente = require('../models/Cliente');

class ClienteController {
  // Lista Cliente
  async show(req, res, next) {
    const cliente = await Cliente.findById(req.params.id);
    return res.status(200).json(cliente);
  }

  // Criar Cliente

  async store(req, res, next) {
    const { nome, cpf, telefone } = req.body;
    const cliente = new Cliente({
      _id: new mongoose.Types.ObjectId(),
      nome,
      cpf,
      telefone,
    });
    await cliente.save();
    return res.status(201).json(cliente);
  }

  // Atualizar Cliente

  async update(req, res, next) {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(401).json({
        error: 'Cliente não encontrado',
      });
    }

    const { nome, cpf, telefone } = req.body;
    await cliente.updateOne({
      nome,
      cpf,
      telefone,
    });

    return res.status(200).json(cliente);
  }

  // Deletar Cliente

  async delete(req, res, next) {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(401).json({
        error: 'Cliente não encontrado',
      });
    }

    await cliente.deleteOne();

    return res.status(200).json(cliente);
  }
}

module.exports = new ClienteController();