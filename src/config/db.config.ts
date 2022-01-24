import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const connection = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
});
connection
  .authenticate()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default connection;
