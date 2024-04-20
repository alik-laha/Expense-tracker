import express from "express";
const router = express.Router();
import { CreateSpending, GetSpending, UpdateSpending, DeleteSpending } from "../controller/spending/createSpending.js";
import { createSpendon, DeleteSpendon, GetAllSpendon } from "../controller/spending/spendon.js";
import { CreateEarning } from "../controller/earning/earning.js";
import { createEarningFrom } from "../controller/earning/earningFrom.js";

//Spendings
router.post("/create/:id", CreateSpending);

router.get("/getallspending/:userid", GetSpending)

router.put("/updatespending/:id", UpdateSpending);

router.delete("/deletespending/:id", DeleteSpending)

//SpendOn
router.post("/spendon", createSpendon);

router.delete("/deletespendon/:id", DeleteSpendon);

router.get("/getallspendon/:userid", GetAllSpendon);

//Earnings
router.post("/create/:id", CreateEarning);

//Earning From
router.post("/createearningfrom/:id", createEarningFrom);

export default router;