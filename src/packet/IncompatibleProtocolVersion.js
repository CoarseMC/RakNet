const Packet = require("./Packet");
const Identifiers = require("../Identifiers");

class IncompatibleProtocolVersion extends Packet {
	packetID = Identifiers.INCOMPATIBLE_PROTOCOL_VERSION;
	protocolVersion;
	serverGUID;

	decodeBody() {
		this.protocolVersion = this.readUnsignedByte();
		this.readMagic();
		this.serverGUID = this.readUnsignedLongBE();
	}

	encodeBody() {
		this.writeUnsignedByte(this.protocolVersion);
		this.writeMagic();
		this.writeUnsignedLongBE(this.serverGUID);
	}
}

module.exports = IncompatibleProtocolVersion;