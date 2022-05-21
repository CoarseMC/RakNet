const Packet = require("./Packet");
const Identifiers = require("../Identifiers");

class OpenConnectionReplyOne extends Packet {
	packetID = Identifiers.OPEN_CONNECTION_REPLY_ONE;
	serverGUID;
	useSecurity;
	mtuSize;

	decodeBody() {
		this.readMagic();
		this.serverGUID = this.readUnsignedLongBE();
		this.useSecurity = this.readBool();
		this.mtuSize = this.readUnsignedShortBE();
	}

	encodeBody() {
		this.writeMagic();
		this.writeUnsignedLongBE(this.serverGUID);
		this.writeBool(this.useSecurity);
		this.writeUnsignedShortBE(this.mtuSize);
	}
}

module.exports = OpenConnectionReplyOne;