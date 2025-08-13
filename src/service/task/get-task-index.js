import taskDatabase from './task-database.js';
import getTaskByTaskId from './get-task-by-task-id.js';

const getTaskIndex = (taskId) => taskDatabase.indexOf(getTaskByTaskId(taskId));

export default getTaskIndex;