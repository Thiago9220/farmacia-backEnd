const { Router } = require('express');
const AdminController = require('./app/controllers/AdminController');
const ProdutoController =  require('./app/controllers/ProdutoController')
const ClienteController = require('./app/controllers/ClienteController')

const routes = new Router();

// CRUD Funcionario
routes.get('/funcionario/:id', AdminController.show);
routes.post('/funcionario', AdminController.store);

routes.put('/funcionario/:id', AdminController.update);
routes.delete('/funcionario/:id', AdminController.delete);

// CRUD Produto
routes.get('/produto/:id', ProdutoController.show);
routes.post('/produto', ProdutoController.store);

routes.put('/produto/:id', ProdutoController.update);
routes.delete('/produto/:id', ProdutoController.delete);

// CRUD Cliente
routes.get('/Cliente/:id', ClienteController.show);
routes.post('/cliente', ClienteController.store);

routes.put('/cliente/:id', ClienteController.update);
routes.delete('/cliente/:id', ClienteController.delete);


module.exports = routes;
