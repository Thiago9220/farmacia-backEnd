"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AdminController = require('./app/controllers/AdminController'); var _AdminController2 = _interopRequireDefault(_AdminController);

const routes = new (0, _express.Router)();

routes.get('/funcionario/:id', _AdminController2.default.show);
routes.post('/funcionario', _AdminController2.default.store);

routes.put('/funcionario/:id', _AdminController2.default.update);
routes.delete('/funcionario/:id', _AdminController2.default.delete);

exports. default = routes;
