const Packet = require("./Packet");
const Identifiers = require("../Identifiers");

class ConnectionRequest extends Packet {
	packetID = Identifiers.CONNECTION_REQUEST;
	clientGUID;
	requestTimestamp;

	decodeBody() {
		this.clientGUID = this.readUnsignedLongBE();
		this.requestTimestamp = this.readUnsignedLongBE();
	}

	encodeBody() {
		this.writeUnsignedLongBE(this.clientGUID);
		this.writeUnsignedLongBE(this.requestTimestamp);
	}
}

module.exports = ConnectionRequest;