import taskDatabase from './task-database.js';
import getTaskIndex from './get-task-index.js';

const deleteTask = (taskId) => taskDatabase.splice(getTaskIndex(taskId), 1);

export default deleteTask;