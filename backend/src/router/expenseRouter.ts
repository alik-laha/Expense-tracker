import express from "express";
const router = express.Router();
import { CreateSpending, GetSpending, UpdateSpending, DeleteSpending } from "../controller/spending/createSpending.js";
import { createSpendon } from "../controller/spending/spendon.js";

//Spendings
router.post("/create/:id", CreateSpending);

router.post("/getallspending/:userid", GetSpending)

router.put("/updatespending/:id", UpdateSpending);

router.delete("/deletespending/:id", DeleteSpending)

//SpendOn
router.post("/spendon", createSpendon);

export default router;