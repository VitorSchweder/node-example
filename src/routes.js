const routes = require("express").Router();

const ClientsController = require("./app/controllers/ClientsController");

routes.get("/clients", ClientsController.index);

module.exports = routes;
