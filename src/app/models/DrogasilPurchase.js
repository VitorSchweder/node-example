const Purchase = require("./Purchase");

class DrogasilPurchase extends Purchase {
	constructor(clientId) {
		super(clientId);
		this.platform = "drogasil";
	}

	all() {
		return [
			{
				id: this.id,
				clientId: this.clientId,
				platform: this.platform,
				quantity: 12,
				date: "2022-01-08",
			},
			{
				id: this.id,
				clientId: this.clientId,
				platform: this.platform,
				quantity: 14,
				date: "2022-06-01",
			},
			{
				id: this.id,
				clientId: this.clientId,
				platform: this.platform,
				quantity: 82,
				date: "2022-08-20",
			},
		];
	}
}

module.exports = DrogasilPurchase;
