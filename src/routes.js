const { Router } = require('express');
const cors = require('cors')
const FuncionarioController = require('./app/controllers/FuncionarioController');
const ProdutoController =  require('./app/controllers/ProdutoController')
const ClienteController = require('./app/controllers/ClienteController')

const routes = new Router();

routes.get('/', function (req, res){
  return res.send('Tudo OK!')
})

// CRUD Funcionario
routes.get('/funcionario', (req, res) => res.send('Tudo OK!'));

routes.get('/funcionario/:id', cors(), FuncionarioController.show);
routes.post('/funcionario', cors(), FuncionarioController.store);
routes.put('/funcionario/:id', cors(), FuncionarioController.update);
routes.delete('/funcionario/:id', cors(), FuncionarioController.delete);

// CRUD Produto
routes.get('/produto', (req, res) => res.send('Tudo OK!'));

routes.get('/produto/:id', cors(), ProdutoController.show);
routes.post('/produto', cors(), ProdutoController.store);
routes.put('/produto', cors(), ProdutoController.update);
routes.delete('/produto/:id', cors(), ProdutoController.delete);

// CRUD Cliente
routes.get('/cliente', (req, res) => res.send('Tudo OK!'));

routes.get('/cliente/:id', cors(), ClienteController.show);
routes.post('/cliente', cors(), ClienteController.store)
routes.put('/cliente/:id', cors(), ClienteController.update);
routes.delete('/cliente/:id', cors(), ClienteController.delete);

module.exports = routes;
