import { Sequelize, DataTypes, Model, UUIDV4 } from 'sequelize';

import dbconfig from '../config/db.config.js';

const sequelize = new Sequelize(`to-do-db`, `postgres`, `Wqop2190.`, dbconfig);

class Task extends Model {}

Task.init(
	{
		// Model attributes are defined here
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4(),
			allowNull: false,
			primaryKey: true,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		order: {
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
	},
	{
	sequelize, // We need to pass the connection instance
	modelName: 'Task', // We need to choose the model name
		timestamps: true,
		createdAt: true,
	}
);

export default Task;