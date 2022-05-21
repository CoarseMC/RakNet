const Packet = require("./Packet");
const Identifiers = require("../Identifiers");

class OpenConnectionRequestTwo extends Packet {
	packetID = Identifiers.OPEN_CONNECTION_REQUEST_TWO;
	serverAddress;
	mtuSize;
	clientGUID;

	decodeBody() {
		this.readMagic();
		this.serverAddress = this.readAddress();
		this.mtuSize = this.readUnsignedShortBE();
		this.clientGUID = this.readUnsignedLongBE();
	}

	encodeBody() {
		this.writeMagic();
		this.writeAddress(this.serverAddress);
		this.writeUnsignedShortBE(this.mtuSize);
		this.writeUnsignedLongBE(this.clientGUID);
	}
}

module.exports = OpenConnectionRequestTwo;