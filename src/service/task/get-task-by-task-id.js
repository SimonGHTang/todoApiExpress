const taskDatabase = require('./task-database.js');

const getTaskByTaskId = (taskId) => taskDatabase.filter(task => taskId === task.taskId)[0];

module.exports = getTaskByTaskId;