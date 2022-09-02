const { v4: uuidv4 } = require("uuid");

class Purchase {
	constructor(clientId) {
		this.id = uuidv4();
		this.clientId = clientId;
	}
}

module.exports = Purchase;
