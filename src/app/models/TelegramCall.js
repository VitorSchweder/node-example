const Call = require("./Call");

class TelegramCall extends Call {
	constructor(clientId) {
		super(clientId);
		this.type = "telegram";
	}

	all() {
		return [
			{
				id: this.id,
				clientId: this.clientId,
				type: this.type,
				quantity: 19,
				date: "2022-02-07",
			},
			{
				id: this.id,
				clientId: this.clientId,
				type: this.type,
				quantity: 3,
				date: "2022-01-18",
			},
			{
				id: this.id,
				clientId: this.clientId,
				type: this.type,
				quantity: 9,
				date: "2022-01-04",
			},
		];
	}
}

module.exports = TelegramCall;
