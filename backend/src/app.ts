import express from "express";
const app = express();
import cors from "cors";
import userRouter from "./router/userRouter";
import cookiePerser from "cookie-parser";
import expenseRouter from "./router/expenseRouter";

app.use(cors());
app.use(cookiePerser());
app.use(express.json());

app.use("/api/user", userRouter);

app.use("/api/expense", expenseRouter);

export default app
