import taskDatabase from './task-database.js';
import getTaskIndex from './get-task-index.js';

const editTask = (task) => {
	taskDatabase.splice(getTaskIndex(task.taskId), 1, task);
}

export default editTask;