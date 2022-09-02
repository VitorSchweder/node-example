const Order = require("../models/Order");
const WhatsUpCall = require("../models/WhatsUpCall");
const TelegramCall = require("../models/TelegramCall");
const DrogaraiaPurchase = require("../models/DrogaraiaPurchase");
const DrogasilPurchase = require("../models/DrogasilPurchase");
const UltrafarmaPurchase = require("../models/UltrafarmaPurchase");
const Ticket = require("../models/Ticket");

class ClientsController {
	async index(req, res) {
		const order = new Order(1);
		const whatsUpCall = new WhatsUpCall(1);
		const telegramCall = new TelegramCall(1);
		const ticket = new Ticket(1);
		const drogaRaiaPurchase = new DrogaraiaPurchase(1);
		const drogasilPurchase = new DrogasilPurchase(1);
		const ultrafarmaPurchase = new UltrafarmaPurchase(1);

		const result = {
			orders: order.all(),
			whatsUpCalls: whatsUpCall.all(),
			telegramCalls: telegramCall.all(),
			tickets: ticket.all(),
			drogaRaiaPurchases: drogaRaiaPurchase.all(),
			drogasilPurchases: drogasilPurchase.all(),
			ultrafarmaPurchases: ultrafarmaPurchase.all(),
		};

		return res.json(result);
	}
}

module.exports = new ClientsController();
