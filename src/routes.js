const { Router } = require('express');
const FuncionarioController = require('./app/controllers/FuncionarioController');
const ProdutoController =  require('./app/controllers/ProdutoController')
const ClienteController = require('./app/controllers/ClienteController')

const routes = new Router();

routes.get('/', function (req,res){
  return res.send('Tudo OK!')
})

// CRUD Funcionario
routes.get('/funcionario/:id', FuncionarioController.show);
routes.post('/funcionario', FuncionarioController.store);

routes.put('/funcionario/:id', FuncionarioController.update);
routes.delete('/funcionario/:id', FuncionarioController.delete);

// CRUD Produto
routes.get('/produto/:id', ProdutoController.show);
routes.post('/produto', ProdutoController.store);

routes.put('/produto/:id', ProdutoController.update);
routes.delete('/produto/:id', ProdutoController.delete);

// CRUD Cliente
routes.get('/cliente/:id', ClienteController.show);
routes.post('/cliente', ClienteController.store);

routes.put('/cliente/:id', ClienteController.update);
routes.delete('/cliente/:id', ClienteController.delete);


module.exports = routes;
