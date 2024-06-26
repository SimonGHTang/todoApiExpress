const taskService = require('../../service/task/task-service.js');

const getTaskByTaskId = (req, res) => {
	// get the task
	const task = taskService.getTaskByTaskId(req.params.taskId);

	// put retieved task into response
	res.status(200).send(task);
}

module.exports = getTaskByTaskId;