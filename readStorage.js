const fs = require("fs");

module.exports = function readStorage () {
	try {
		const storageFile = fs.readFileSync("./storage.json");
		return JSON.parse(storageFile);
	} catch (error) {
		console.log(error);
	}

}