class InternetAddress {
	name;
	port;
	version;

	/**
	 * Initialzes a new internet address
	 * @param {string} name 
	 * @param {number} port 
	 * @param {number} version 
	 */
	constructor (name, port, version = 4) {
		this.name = name;
		this.port = port;
		this.version = version;
	}

	/**
	 * Converts the address to a string
	 * @returns string
	 */
	toString() {
		return this.name + ":" + this.port.toString();
	}
}

module.exports = InternetAddress;