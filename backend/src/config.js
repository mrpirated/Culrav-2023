import dotenv from "dotenv";
dotenv.config();
module.exports = {
	HOST_NAME: process.env.HOST_NAME,
	DB_HOSTNAME: process.env.DB_HOSTNAME,
	DB_PORT: process.env.DB_PORT,
	DB_NAME: process.env.DB_NAME,
	DB_USERNAME: process.env.DB_USERNAME,
	DB_PASSWORD: process.env.DB_PASSWORD,
	PORT: process.env.PORT,
	SALT_ROUNDS: process.env.SALT_ROUNDS,
	SECRET_KEY: process.env.SECRET_KEY,
	AZURE_EMAIL_CONNECTION_STRING: process.env.AZURE_EMAIL_CONNECTION_STRING,
};
