const Packet = require("./Packet");
const Identifiers = require("../Identifiers");

class UnconnectedPong extends Packet {
	packetID = Identifiers.UNCONNECTED_PONG;
	clientTimestamp;
	serverGUID;
	data;

	decodeBody() {
		this.clientTimestamp = this.readUnsignedLongBE();
		this.serverGUID = this.readUnsignedLongBE();
		this.readMagic();
		this.data = this.readString();
	}

	encodeBody() {
		this.writeUnsignedLongBE(this.clientTimestamp);
		this.writeUnsignedLongBE(this.serverGUID);
		this.writeMagic();
		this.writeString(this.data);
	}
}

module.exports = UnconnectedPong;