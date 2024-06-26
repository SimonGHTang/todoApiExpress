const taskDatabase = require('./task-database.js');

const getTaskList = () => taskDatabase;

module.exports = getTaskList;