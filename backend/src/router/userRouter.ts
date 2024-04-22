import express from "express";
const router = express.Router();
import Signup from "../controller/user/Signup.js";
import CheckUser from "../middleware/checkUser.js";
import Login from "../controller/user/login.js";
import Verify from "../controller/user/verify.js";
import emailVerify from "../controller/user/emailVerify.js";
import logout from "../controller/user/logout.js";
import { verify } from "jsonwebtoken";
import { verifyToken } from "../middleware/verification.js";

router.post("/signup", CheckUser, Signup);

router.put("/login", Login)

router.get("/verify", Verify)

router.get("/email/verify", emailVerify)

router.get("/logout", verifyToken, logout)

export default router;