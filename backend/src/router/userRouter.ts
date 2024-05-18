import express from "express";
const router = express.Router();
import Signup from "../controller/user/Signup.js";
import CheckUser from "../middleware/checkUser.js";
import Login from "../controller/user/login.js";
import Verify from "../controller/user/verify.js";
import emailVerify from "../controller/user/emailVerify.js";
import logout from "../controller/user/logout.js";
import { verifyToken } from "../middleware/verification.js";
import forgotPassword from "../controller/user/forgotPassword.js";
import ResetPasswordController from "../controller/user/resetPassword.js";


router.post("/signup", CheckUser, Signup);

router.get("/", (req, res) => res.send("User Router"))

router.put("/login", Login)

router.get("/verify", Verify)

router.get("/email/verify/:userid", emailVerify)

router.get("/logout", verifyToken, logout)

router.put("/forgotPassword", forgotPassword)

router.put("/resetPassword", ResetPasswordController)

export default router;