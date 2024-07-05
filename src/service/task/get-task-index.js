const taskDatabase = require('./task-database');
const getTaskByTaskId = require('./get-task-by-task-id.js');

const getTaskIndex = (taskId) => taskDatabase.indexOf(getTaskByTaskId(taskId));

module.exports = getTaskIndex;