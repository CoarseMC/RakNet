const Packet = require("./Packet");
const Identifiers = require("../Identifiers");

class OpenConnectionRequestOne extends Packet {
	packetID = Identifiers.OPEN_CONNECTION_REQUEST_ONE;
	protocolVersion;
	mtuSize;

	decodeBody() {
		this.readMagic();
		this.protocolVersion = this.readUnsignedByte();
		this.mtuSize = this.readRemaining().length + 46;
	}

	encodeBody() {
		this.writeMagic();
		this.writeUnsignedByte(this.protocolVersion);
		let tmp = Buffer.alloc(this.mtuSize - 46);
		tmp.fill("\x00");
		this.write(tmp);
	}
}

module.exports = OpenConnectionRequestOne;