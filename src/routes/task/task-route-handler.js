const getTaskList = require('./get-task-list.js');
const getTaskByTaskId = require('./get-task-by-task-id.js');
const putTask = require('./put-task.js');
const postTask = require('./post-task.js');
const deleteTask = require('./delete-task.js');

module.exports = { getTaskList, getTaskByTaskId, putTask, postTask, deleteTask };