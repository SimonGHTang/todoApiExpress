import { Sequelize, DataTypes, Model, UUIDV4 } from 'sequelize';

import connectDB from '../service/database-connection.js';
import User from '../model/user.model.js';
import Task from '../model/task.model.js';

const dbSeeder = async () => {
	const sequelize = await connectDB();
	await sequelize.drop();
	await sequelize.sync();
	await Task.drop();
	await Task.sync();
	await User.drop();
	await User.sync();
	const jane = await User.create({ firstName: "Jane", lastName: "Doe"});
	const task = await Task.create({ description: "task description", order: 1});
	console.log("jane: " + JSON.stringify(jane));
	console.log("task: " + JSON.stringify(task));
}

export default dbSeeder;