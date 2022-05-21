const Packet = require("./Packet");
const Identifiers = require("../Identifiers");

class UnconnectedPing extends Packet {
	packetID = Identifiers.UNCONNECTED_PING;
	clientTimestamp;
	clientGUID;

	decodeBody() {
		this.clientTimestamp = this.readUnsignedLongBE();
		this.readMagic();
		this.clientGUID = this.readUnsignedLongBE();
	}

	encodeBody() {
		this.writeUnsignedLongBE(this.clientTimestamp);
		this.writeMagic();
		this.writeUnsignedLongBE(this.clientGUID);
	}
}

module.exports = UnconnectedPing;