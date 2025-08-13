import taskService from '../../service/task/task-service.js';

const postTask = (req, res) => {
	taskService.editOrAddTask(req.body);
	res.status(200).send("task edited");
}

export default postTask;