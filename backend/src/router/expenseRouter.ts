import express from "express";
const router = express.Router();
import { CreateSpending, GetSpending, UpdateSpending, DeleteSpending } from "../controller/spending/Spending.js";
import { createSpendon, DeleteSpendon, GetAllSpendon } from "../controller/spending/spendon.js";
import { CreateEarning, DeleteEarning, GetEarnings, UpdateEarning } from "../controller/earning/earning.js";
import { createEarningFrom, deleteEarningFrom, getEarningFrom } from "../controller/earning/earningFrom.js";
import { CreateInvestment, GetInvestments, UpdateInvestment, DeleteInvestment } from "../controller/investment/investment.js";
import { CreateInvestIn, GetInvestIn, DeleteInvestIn } from "../controller/investment/investmentIn.js";
import { CreateGoal, DeleteGoal, GetGoals } from "../controller/investment/goal.js";
import { verifyToken } from "../middleware/verification.js";
//Spendings
router.post("/spending", verifyToken, CreateSpending);
router.get("/getallspending", verifyToken, GetSpending)
router.put("/updatespending/:id", verifyToken, UpdateSpending);
router.delete("/deletespending/:id", verifyToken, DeleteSpending)

//SpendOn
router.post("/spendon", verifyToken, createSpendon);
router.delete("/deletespendon/:id", verifyToken, DeleteSpendon);
router.get("/getallspendon", verifyToken, GetAllSpendon);

//Earnings
router.post("/earnings", verifyToken, CreateEarning);
router.get("/getallearnings", verifyToken, GetEarnings)
router.put("/updateearnings/:id", verifyToken, UpdateEarning);
router.delete("/deleteearnings/:id", verifyToken, DeleteEarning)

//Earning From
router.post("/createearningfrom/:userid", verifyToken, createEarningFrom);
router.get("/getearningfrom", verifyToken, getEarningFrom);
router.delete("/deleteearningfrom/:id", verifyToken, deleteEarningFrom);

//Investment
router.post("/createinvestment", verifyToken, CreateInvestment);
router.get("/getallinvestment", verifyToken, GetInvestments);
router.put("/updateinvestment/:id", verifyToken, UpdateInvestment);
router.delete("/deleteinvestment/:id", verifyToken, DeleteInvestment);

//Investment In
router.post("/createinvestmentin", verifyToken, CreateInvestIn);
router.get("/getinvestmentin", verifyToken, GetInvestIn);
router.delete("/deleteinvestmentin/:id", verifyToken, DeleteInvestIn);

//Goal Setting
router.post("/creategoal/:userid", verifyToken, CreateGoal);
router.get("/getallgoal", verifyToken, GetGoals);
router.delete("/deletegoal/:id", verifyToken, DeleteGoal);

export default router;