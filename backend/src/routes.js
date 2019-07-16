const express = require('express');
const FellingController = require('./controllers/FellingController');
const bodyParser = require('body-parser');
const routes = new express.Router();

routes.use(bodyParser.json());

routes.get('/api/fellings', FellingController.index);
routes.post('/api/fellings', FellingController.store);
routes.delete('/api/fellings/:id', FellingController.delete);
routes.put('/api/fellings/:id', FellingController.put);
routes.get('/api/fellings/:id', FellingController.get);

module.exports = routes;