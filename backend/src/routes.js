const express = require('express');
const videosController = require('../src/controllers/videosController');

const routes = express.Router();



routes.get('/videos',videosController.index);
routes.post('/videos/new',videosController.create);


module.exports = routes;
