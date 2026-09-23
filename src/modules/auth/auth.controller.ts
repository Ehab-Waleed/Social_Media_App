import { Router } from "express";
import US from "./auth.service";
import { validation } from "../../common/middleware/validation";
import { signUpSchema } from "./auth.validation";

const userRouter = Router()

userRouter.post("/signUp", validation(signUpSchema),US.signUp)
userRouter.post("/signIn",US.signIn)

export default userRouter