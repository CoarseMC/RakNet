const Acknowledge = require("./Acknowledge");
const Identifiers = require("../Identifiers");

class Nack extends Acknowledge {
	packetID = Identifiers.NACK;
}

module.exports = Nack;