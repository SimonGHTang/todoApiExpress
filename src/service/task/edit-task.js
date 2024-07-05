const taskDatabase = require('./task-database.js');
const getTaskIndex = require('./get-task-index.js');

const editTask = (task) => {
	taskDatabase.splice(getTaskIndex(task.taskId), 1, task);
}

module.exports = editTask;