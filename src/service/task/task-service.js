const getTaskList = require('./get-task-list.js');
const getTaskByTaskId = require('./get-task-by-task-id.js');
const addTask = require('./add-task.js')
const deleteTask = require('./delete-task.js');

module.exports = { getTaskList, getTaskByTaskId, addTask, deleteTask };