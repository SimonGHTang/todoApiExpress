const fs = require("fs");
const JSON_FILE = "./storage.json"
// import storage from "./storage.json"

module.exports = function writeStorage (param) {
	try {
		const storageFile = fs.readFileSync(JSON_FILE);
		let storageJson = JSON.parse(storageFile);

		//data manip
		let newTask = {
			taskId: "newId",
			taskDescription: "newDescription"
		}
		storageJson = JSON.stringify({...storageJson, newTask});

		fs.writeFileSync(JSON_FILE, storageJson);

		return storageJson;

	} catch (error) {
		console.log(error)
	}
}