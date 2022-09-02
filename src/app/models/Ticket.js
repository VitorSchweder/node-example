const { v4: uuidv4 } = require("uuid");

class Ticket {
	constructor(clientId) {
		this.id = uuidv4();
		this.clientId = clientId;
	}

	all() {
		return [
			{
				id: this.id,
				clientId: this.clientId,
				quantity: 28,
				date: "2022-08-09",
			},
			{
				id: this.id,
				clientId: this.clientId,
				quantity: 17,
				date: "2022-08-10",
			},
			{
				id: this.id,
				clientId: this.clientId,
				quantity: 5,
				date: "2022-08-11",
			},
		];
	}
}

module.exports = Ticket;
