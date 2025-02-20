import { Router } from "express";
import { signIn, signOut, signUp } from "../Controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/sign_up", signUp );
authRouter.post("/signin", signIn);
authRouter.post("/sign_out", signOut );

export default authRouter;
