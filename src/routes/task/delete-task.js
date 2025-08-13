import taskService from '../../service/task/task-service.js';

const deleteTask = (req, res) => {
	// delete the task
	try {
		const task = taskService.deleteTask(req.params.taskId);

		// put retieved task into response
		res.status(200).send("task deleted from database");
	} catch (err) {
		console.log(err);
		res.status(404).send(`could not delete task with id:${req.params.taskId}`);
	}
}

export default deleteTask;