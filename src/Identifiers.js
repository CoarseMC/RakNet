class Identifiers {
	static UNCONNECTED_PING = 0x01;
	static UNCONNECTED_PING_OPEN_CONNECTIONS = 0x02;
	static UNCONNECTED_PONG = 0x1C;
	static INCOMPATIBLE_PROTOCOL_VERSION = 0x19;
	static OPEN_CONNECTION_REQUEST_ONE = 0x05;
	static OPEN_CONNECTION_REPLY_ONE = 0x06;
	static OPEN_CONNECTION_REQUEST_TWO = 0x07;
	static OPEN_CONNECTION_REPLY_TWO = 0x08;
	static ACK = 0xC0;
	static NACK = 0xA0;
	static FRAME_SET = 0x80;
	static CONNECTION_REQUEST = 0x09;
	static CONNECTION_REQUEST_ACCEPTED = 0x10;
	static NEW_INCOMING_CONNECTION = 0x13;
	static CONNECTED_PING = 0x00;
	static CONNECTED_PONG = 0x03;
	static DISCONNECT_NOTIFICATION = 0x15;
	static MAGIC = Buffer.from([
		0x00, 0xff, 0xff, 0x00,
		0xfe, 0xfe, 0xfe, 0xfe,
		0xfd, 0xfd, 0xfd, 0xfd,
		0x12, 0x34, 0x56, 0x78
	]);
}

module.exports = Identifiers;