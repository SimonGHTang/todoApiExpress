const taskDatabase = require('./task-database.js');
const getTaskIndex = require('./get-task-index.js');

const deleteTask = (taskId) => taskDatabase.splice(getTaskIndex(taskId), 1);

module.exports = deleteTask;