const { Router } = require('express');
const AdminController = require('./app/controllers/AdminController');

const routes = new Router();

routes.get('/funcionario/:id', AdminController.show);
routes.post('/funcionario', AdminController.store);

routes.put('/funcionario/:id', AdminController.update);
routes.delete('/funcionario/:id', AdminController.delete);

module.exports = routes;
