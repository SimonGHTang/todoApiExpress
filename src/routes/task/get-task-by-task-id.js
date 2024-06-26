const taskService = require('../../service/task/task-service.js');

const getTaskByTaskId = (req, res) => {
	// get the task
	try {
		const task = taskService.getTaskByTaskId(req.params.taskId);

		// put retieved task into response
		res.status(200).send(task);
	} catch (err) {
		console.log(err);
		res.status(404).send(`task with id:${req.params.taskId} couldn't be found`);
	}
}

module.exports = getTaskByTaskId;