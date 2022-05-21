const Packet = require("./Packet");
const Identifiers = require("../Identifiers");

class DisconnectNotification extends Packet {
	packetID = Identifiers.DISCONNECT_NOTIFICATION;
}

module.exports = DisconnectNotification;