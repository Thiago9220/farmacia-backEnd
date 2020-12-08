const mongoose = require('mongoose');
const Produto = require('../models/Produto');

class ProdutoController {
  // Lista Produto
  async show(req, res, next) {
    const produto = await Produto.findById(req.params.id);

    if(!produto) {
      return res.status(500).json({Error: "Produto não encontrado"})
    }

    return res.status(200).json(produto);
  }

  // Criar Produto

  async store(req, res, next) {
    const { nome, preco, categoria, dataValidade } = req.body;
    const produto = new Produto({
      _id: new mongoose.Types.ObjectId(),
      nome, preco, categoria, dataValidade
    });
    await produto.save();
    return res.status(201).json(produto);
  }

  // Atualizar Produto

  async update(req, res, next) {
    const produto = await Produto.findById(req.params.id);

    if (!produto) {
      return res.status(401).json({
        error: 'Produto não encontrado',
      });
    }

    const { nome, preco, categoria, dataValidade } = req.body;
    await produto.updateOne({
      nome,
      preco,
      categoria,
      dataValidade,
    });

    return res.status(200).json({
      "Produto Atualizado com Sucesso": {
      nome,
      preco,
      categoria,
      dataValidade,
    }});
  }

  // Deletar Produto

  async delete(req, res, next) {
    const produto = await Produto.findById(req.params.id);
    if (!produto) {
      return res.status(401).json({
        error: 'Produto não encontrado',
      });
    }

    await produto.deleteOne();

    return res.status(200).json(produto);
  }
}

module.exports = new ProdutoController();