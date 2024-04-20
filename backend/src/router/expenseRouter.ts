import express from "express";
const router = express.Router();
import { CreateSpending } from "../controller/spending/createSpending.js";
import { createSpendon } from "../controller/spending/spendon.js";

router.post("/create/:id", CreateSpending);

router.post("/spendon", createSpendon);

export default router;