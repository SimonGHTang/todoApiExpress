const getTaskList = require('./get-task-list.js');
const getTaskByTaskId = require('./get-task-by-task-id.js');
const addTask = require('./add-task.js');
const editTask = require('./edit-task.js');
const editOrAddTask = require('./edit-or-add-task.js');
const deleteTask = require('./delete-task.js');

module.exports = { getTaskList, getTaskByTaskId, addTask, editTask, editOrAddTask, deleteTask };