import { Sequelize } from 'sequelize';

import dbconfig from '../config/db.config.js';

//Establish Connection to the DB
const connectDB = async () => {
	// console.log(`${process.env.DB_NAME}` + `${process.env.DB_USER}` + `${process.env.DB_PASSWORD}`);
	const sequelize = new Sequelize(`to-do-db`, `postgres`, `Wqop2190.`, dbconfig);

	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
		return sequelize;
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

export default connectDB;