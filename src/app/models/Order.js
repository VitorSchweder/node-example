const { v4: uuidv4 } = require("uuid");

class Order {
	constructor(clientId) {
		this.clientId = clientId;
	}

	all() {
		return [
			{
				id: uuidv4(),
				clientId: this.clientId,
				price: 34.9,
				quantity: 10,
				total: 349,
			},
			{
				id: uuidv4(),
				clientId: this.clientId,
				price: 182,
				quantity: 5,
				total: 910,
			},
			{
				id: uuidv4(),
				clientId: this.clientId,
				price: 400,
				quantity: 2,
				total: 800,
			},
		];
	}
}

module.exports = Order;
