const Packet = require("./Packet");

const Identifiers = require("../Identifiers");



class ConnectedPing extends Packet {

	packetID = Identifiers.CONNECTED_PING;

	clientTimestamp;



	decodeBody() {

		this.clientTimestamp = this.readUnsignedLongBE();
	}



	encodeBody() {

		this.writeUnsignedLongBE(this.clientTimestamp);

	}

}



module.exports = ConnectedPing;