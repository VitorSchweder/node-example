const Purchase = require("./Purchase");

class UltrafarmaPurchase extends Purchase {
	constructor(clientId) {
		super(clientId);
		this.platform = "ultrafarma";
	}

	all() {
		return [
			{
				id: this.id,
				clientId: this.clientId,
				platform: this.platform,
				quantity: 7,
				date: "2022-02-03",
			},
			{
				id: this.id,
				clientId: this.clientId,
				platform: this.platform,
				quantity: 26,
				date: "2022-05-09",
			},
			{
				id: this.id,
				clientId: this.clientId,
				platform: this.platform,
				quantity: 16,
				date: "2022-07-02",
			},
		];
	}
}

module.exports = UltrafarmaPurchase;
