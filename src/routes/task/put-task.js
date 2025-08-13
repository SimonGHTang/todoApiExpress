import taskService from '../../service/task/task-service.js';

const putTask = (req, res) => {
	//need to verify req body
	taskService.editTask(req.body);
	res.status(200).send('task edited');
}

export default putTask;