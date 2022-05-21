const Acknowledge = require("./Acknowledge");
const Identifiers = require("../Identifiers");

class Ack extends Acknowledge {
	packetID = Identifiers.ACK;
}

module.exports = Ack;