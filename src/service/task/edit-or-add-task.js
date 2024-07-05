const taskDatabase = require('./task-database.js');
const addTask = require('./add-task.js');
const editTask = require('./edit-task.js');

const editOrAddTask = (task) => {
	let taskId = task.taskId;
	let taskInDatabase = taskDatabase.some((databaseTask) => databaseTask.taskId === taskId);
	if (taskInDatabase === false) 
		addTask(task);
	else
		editTask(task);
}

module.exports = editOrAddTask;