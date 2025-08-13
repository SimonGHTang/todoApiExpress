import taskDatabase from './task-database.js';

const addTask = (task) => taskDatabase.push(task);

export default addTask;