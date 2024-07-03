const taskService = require('../../service/task/task-service.js');

const postTask = (req, res) => {
	taskService.editTask(req.body);
	res.status(200).send("task edited");
}

module.exports = postTask;