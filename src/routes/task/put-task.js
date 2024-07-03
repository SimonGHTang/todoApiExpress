const taskService = require('../../service/task/task-service.js');

const putTask = (req, res) => {
	//need to verify req body
	taskService.addTask(req.body);
	res.status(200).send('task added');
}

module.exports = putTask;