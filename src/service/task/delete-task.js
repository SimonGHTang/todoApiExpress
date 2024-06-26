const taskDatabase = require('./task-database.js');
const getTaskByTaskId = require('./get-task-by-task-id.js');

const getTaskIndex = (taskId) => taskDatabase.indexOf(getTaskByTaskId(taskId));
const deleteTask = (taskId) => taskDatabase.splice(getTaskIndex(taskId), 1);

module.exports = deleteTask;