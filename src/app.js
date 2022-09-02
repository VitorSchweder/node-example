var express = require("express");
const routes = require("./routes");

class App {
	constructor() {
		this.express = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.express.use(express.json());
		this.express.use(express.urlencoded({ extended: true }));
	}

	routes() {
		this.express.use(routes);
	}
}

module.exports = new App().express;
