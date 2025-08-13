import taskDatabase from './task-database.js';

const getTaskByTaskId = (taskId) => {
	let task = taskDatabase.find(task => taskId === task.taskId);
	if (task === undefined) {
		throw new Error('task not found');
	}
	return task;
};

export default getTaskByTaskId;