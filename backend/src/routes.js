// Requires
const express = require('express');
const ong = require('./controllers/ong');
const incident = require('./controllers/incidents');
const session = require('./controllers/session');
// Variables
const routes = express.Router();
/*
* Routes
*/
// ONG
routes.post('/ONG',ong.create);
routes.get('/ONG',ong.select_all);
routes.get('/ONG/:id',ong.select_id);
// INCIDENTS
routes.post('/incidents',incident.create);
routes.get('/incidents',incident.select_all);
routes.get('/incidents/:id',incident.select_id);
routes.delete('/incidents/:id',incident.delete);
// SESSION
routes.get('/session',session.create);
module.exports = routes;