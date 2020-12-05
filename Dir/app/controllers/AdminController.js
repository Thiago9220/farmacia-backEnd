"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _Admin = require('../models/Admin'); var _Admin2 = _interopRequireDefault(_Admin);

class AdminController {
  // Lista Funcionario
  async show(req, res) {
    const funcionario = await _Admin2.default.findById(req.params.id);
    return res.status(200).json(funcionario);
  }

  // Criar Funcionario

  async store(req, res) {
    const { nome, cpf, email, senha, telefone } = req.body;
    const funcionario = new (0, _Admin2.default)({
      _id: new _mongoose2.default.Types.ObjectId(),
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
    const funcionario = await _Admin2.default.findById(req.params.id);
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
    const funcionario = await _Admin2.default.findById(req.params.id);
    if (!funcionario) {
      return res.status(401).json({
        error: 'Funcionario não encontrado',
      });
    }

    await funcionario.deleteOne();

    return res.status(200).json(funcionario);
  }
}

exports. default = new AdminController();
