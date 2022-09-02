const Purchase = require("./Purchase");

class DrogaraiaPurchase extends Purchase {
	constructor(clientId) {
		super(clientId);
		this.platform = "drogaraia";
	}

	all() {
		return [
			{
				id: this.id,
				clientId: this.clientId,
				platform: this.platform,
				quantity: 63,
				date: "2022-03-02",
			},
			{
				id: this.id,
				clientId: this.clientId,
				platform: this.platform,
				quantity: 21,
				date: "2022-06-18",
			},
			{
				id: this.id,
				clientId: this.clientId,
				platform: this.platform,
				quantity: 33,
				date: "2022-08-19",
			},
		];
	}
}

module.exports = DrogaraiaPurchase;
