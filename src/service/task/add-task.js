const taskDatabase = require('./task-database');

const addTask = (task) => taskDatabase.push(task);

module.exports = addTask;