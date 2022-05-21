const Packet = require("./Packet");
const Identifiers = require("../Identifiers");
const Frame = require("../misc/Frame");

class FrameSet extends Packet {
	packetID = Identifiers.FRAME_SET;
	sequenceNumber;
	frames;

	decodeHeader() {
		if ((this.readUnsignedByte() & this.packetID) !== this.packetID) {
			throw new Error("Invalid packet id");
		}
	}

	decodeBody() {
		this.sequenceNumber = this.readUnsignedTriadLE();
		this.frames = [];
		while (this.feos() === false) {
			let frame = new Frame(this.buffer, this.offset);
			frame.decode();
			this.offset = frame.offset;
			this.frames.push(frame);
		}
	}

	encodeBody() {
		this.writeUnsignedTriadLE(this.sequenceNumber);
		for (let i = 0; i < this.frames.length; ++i) {
			this.frames[i].encode()
			this.write(this.frames[i].buffer);
		}
	}
}

module.exports = FrameSet;