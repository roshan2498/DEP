import * as dotenv from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import { User } from "./models/user";
import router from "./routes/userRoutes";
dotenv.config();

console.log(process.env.DATABSE_URL);
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>REST API!</h1>");
});

app.use("/api", router);

User.sync();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
