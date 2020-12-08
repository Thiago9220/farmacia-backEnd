const { Router } = require('express');
const cors = require('cors')
const FuncionarioController = require('./app/controllers/FuncionarioController');
const ProdutoController =  require('./app/controllers/ProdutoController')
const ClienteController = require('./app/controllers/ClienteController')

const routes = new Router();

routes.get('/', cors(), function (req, res){
  return res.send('Tudo OK!')
})

// CRUD Funcionario
routes.get('/funcionario/:id', cors(), FuncionarioController.show);
routes.post('/funcionario', cors(), FuncionarioController.store);

routes.put('/funcionario/:id', cors(), FuncionarioController.update);
routes.delete('/funcionario/:id', cors(), FuncionarioController.delete);

// CRUD Produto
routes.get('/produto/:id', cors(), ProdutoController.show);
routes.post('/produto', cors(), ProdutoController.store);

routes.put('/produto/:id', cors(), ProdutoController.update);
routes.delete('/produto/:id', cors(), ProdutoController.delete);

// CRUD Cliente
routes.get('/cliente/:id', cors(), ClienteController.show);
routes.post('/cliente', cors(), ClienteController.store);

routes.put('/cliente/:id', cors(), ClienteController.update);
routes.delete('/cliente/:id', cors(), ClienteController.delete);


module.exports = routes;
