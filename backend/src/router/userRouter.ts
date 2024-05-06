import express from "express";
const router = express.Router();
import Signup from "../controller/user/Signup";
import CheckUser from "../middleware/checkUser";
import Login from "../controller/user/login";
import Verify from "../controller/user/verify";
import emailVerify from "../controller/user/emailVerify";
import logout from "../controller/user/logout";
import { verifyToken } from "../middleware/verification";
import forgotPassword from "../controller/user/forgotPassword";
import ResetPasswordController from "../controller/user/resetPassword";


router.post("/signup", CheckUser, Signup);

router.put("/login", Login)

router.get("/verify", Verify)

router.get("/email/verify/:userid", emailVerify)

router.get("/logout", verifyToken, logout)

router.put("/forgotPassword", forgotPassword)

router.put("/resetPassword", ResetPasswordController)

export default router;