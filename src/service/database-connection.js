// const { connectionConfig } from "../config/connectionsConfig");
import { Sequelize } from 'sequelize';

import User from '../model/user.js';

//Establish Connection to the DB
const connectDB = async () => {
	// console.log(`${process.env.DB_NAME}` + `${process.env.DB_USER}` + `${process.env.DB_PASSWORD}`);
	const sequelize = new Sequelize(`to-do-db`, `postgres`, `Wqop2190.`, { 
		dialect: "postgres",
		database: "to-do-db",
		schema: "public",
		user: "postgres",
		password: "Wqop2190.",
		host: "localhost",
		port: 5432,
		models: [User],
});
	// const sequelizeConnection = sequelize;

	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
		await sequelize.sync();
		await User.drop();
		await User.sync();
		const jane = await User.create({ firstName: "Jane", lastName: "Doe"});
		console.log(jane);
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

//return connection object
export default connectDB;