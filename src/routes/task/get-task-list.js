const taskService = require('../../service/task/task-service.js');

const getTaskList = (req, res) => {
	// get the task
	const tasks = taskService.getTaskList();

	// put retieved task into response
	// let response = Response();
	// response.body = tasks;
	res.status(200).send(tasks);
}

module.exports = getTaskList;