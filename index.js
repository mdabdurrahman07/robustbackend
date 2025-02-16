import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import subscriptionRouter from "./routes/subscription.router.js";
import connectToDatabase from "./Database/mongodb.js";
const port = 5000 | PORT;

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscription", subscriptionRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Robust Backend Server");
});

app.listen(port, async () => {
  console.log(
    `Robust Backend Server is listening on port http://localhost:${port}`
  );

 await  connectToDatabase();
});
export default app;
