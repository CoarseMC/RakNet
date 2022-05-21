const Packet = require("./Packet");
const Identifiers = require("../Identifiers");

class ConnectionRequestAccepted extends Packet {
	packetID = Identifiers.CONNECTION_REQUEST_ACCEPTED;
	clientAddress;
	systemIndex;
	systemAddresses;
	requestTimestamp;
	replyTimestamp;

	decodeBody() {
		this.clientAddress = this.readAddress();
		this.systemIndex = this.readUnsignedShortBE();
		this.systemAddresses = [];
		for (let i = 0; i < 20; ++i) {
			this.systemAddresses.push(this.readAddress());
		}
		this.requestTimestamp = this.readUnsignedLongBE();
		this.replyTimestamp = this.readUnsignedLongBE();
	}

	encodeBody() {
		this.writeAddress(this.clientAddress);
		this.writeUnsignedShortBE(this.systemIndex);
		for (let i = 0; i < this.systemAddresses.length; ++i) {
			this.writeAddress(this.systemAddresses[i]);
		}
		this.writeUnsignedLongBE(this.requestTimestamp);
		this.writeUnsignedLongBE(this.replyTimestamp);
	}
}

module.exports = ConnectionRequestAccepted;