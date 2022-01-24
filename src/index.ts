import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { usersRouter } from "./users/users.routers";
dotenv.config();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

const app = express();

// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
