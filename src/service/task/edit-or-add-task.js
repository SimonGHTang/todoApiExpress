import taskDatabase from './task-database.js';
import addTask from './add-task.js';
import editTask from './edit-task.js';

const editOrAddTask = (task) => {
	let taskId = task.taskId;
	let taskInDatabase = taskDatabase.some((databaseTask) => databaseTask.taskId === taskId);
	if (taskInDatabase === false) 
		addTask(task);
	else
		editTask(task);
}

export default editOrAddTask;