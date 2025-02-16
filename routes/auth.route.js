import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign_up", (req, res) => res.send({ title: "Sign Up " }));
authRouter.post("/signin", (req, res) => res.send({ title: "Sign In " }));
authRouter.post("/sign_out", (req, res) => res.send({ title: "Sign Out " }));

export default authRouter;
