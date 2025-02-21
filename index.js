import express from "express";
import { PORT } from "./Config/env.js";
import userRouter from "./Routes/user.route.js";
import authRouter from "./Routes/auth.route.js";
import subscriptionRouter from "./Routes/subscription.router.js";
import connectToDatabase from "./Database/mongodb.js";
import errorMiddleware from "./Middleware/error.middleware.js";
import cookieParser from "cookie-parser";

const port = 5000 | PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscription", subscriptionRouter);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to Robust Backend Server");
});

app.listen(port, async () => {
  console.log(
    `Robust Backend Server is listening on port http://localhost:${port}`
  );

  await connectToDatabase();
});
export default app;
