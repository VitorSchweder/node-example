const Call = require("./Call");

class WhatsUpCall extends Call {
	constructor(clientId) {
		super(clientId);
		this.type = "whatsup";
	}

	all() {
		return [
			{
				id: this.id,
				clientId: this.clientId,
				type: this.type,
				quantity: 10,
				date: "2022-01-10",
			},
			{
				id: this.id,
				clientId: this.clientId,
				type: this.type,
				quantity: 23,
				date: "2022-01-11",
			},
			{
				id: this.id,
				clientId: this.clientId,
				type: this.type,
				quantity: 8,
				date: "2022-01-15",
			},
		];
	}
}

module.exports = WhatsUpCall;
