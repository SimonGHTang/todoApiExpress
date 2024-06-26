const taskDatabase = require('./task-database.js');

const getTaskByTaskId = (taskId) => {
	let task = taskDatabase.find(task => taskId === task.taskId);
	if (task === undefined)
		throw new Error('task not found');
};

module.exports = getTaskByTaskId;