import { Sequelize, DataTypes, Model, UUIDV4 } from 'sequelize';

const sequelize = new Sequelize(`to-do-db`, `postgres`, `Wqop2190.`, { 
	dialect: "postgres",
	database: "to-do-db",
	schema: "public",
	user: "postgres",
	password: "Wqop2190.",
	host: "localhost",
	port: 5432
});

class User extends Model {}

User.init(
	{
		// Model attributes are defined here
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4(),
			allowNull: false,
			primaryKey: true,
		},
		firstName: {
			type: DataTypes.STRING,
		},
		lastName: {
			type: DataTypes.STRING,
		},
	},
	{
	sequelize, // We need to pass the connection instance
	modelName: 'User', // We need to choose the model name
    timestamps: true,
    createdAt: true,
	}
);

export default User;