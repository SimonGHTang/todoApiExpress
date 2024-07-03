const taskDatabase = require('./task-database.js');
const getTaskByTaskId = require('./get-task-by-task-id.js');

const getTaskIndex = (taskId) => taskDatabase.indexOf(getTaskByTaskId(taskId));
const editTask = (task) => {
	taskDatabase.splice(getTaskIndex(task.taskId), 1, task);
	console.log("service edit task");
}

module.exports = editTask;