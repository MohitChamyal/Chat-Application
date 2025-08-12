import express from 'express'
import { checkAuth, updateProfile, signup, login } from '../controllers/userController.js'; // Fixed: combined imports
import { protectRoute } from "../middleware/auth.js"

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.put("/update-profile", protectRoute, updateProfile);
userRouter.get("/check", protectRoute, checkAuth);

export default userRouter;
