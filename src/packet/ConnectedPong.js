const Packet = require("./Packet");

const Identifiers = require("../Identifiers");



class ConnectedPong extends Packet {

	packetID = Identifiers.CONNECTED_PONG;

	clientTimestamp;
	serverTimestamp;


	decodeBody() {

		this.clientTimestamp = this.readUnsignedLongBE();
		this.serverTimestamp = this.readUnsignedLongBE();
	}



	encodeBody() {

		this.writeUnsignedLongBE(this.clientTimestamp);

		this.writeUnsignedLongBE(this.serverTimestamp);

	}

}



module.exports = ConnectedPong;