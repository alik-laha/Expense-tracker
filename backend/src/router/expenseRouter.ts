import express from "express";
const router = express.Router();
import { CreateSpending, GetSpending, UpdateSpending, DeleteSpending } from "../controller/spending/createSpending.js";
import { createSpendon, DeleteSpendon, GetAllSpendon } from "../controller/spending/spendon.js";
import { CreateEarning, DeleteEarning, GetEarnings, UpdateEarning } from "../controller/earning/earning.js";
import { createEarningFrom, deleteEarningFrom, getEarningFrom } from "../controller/earning/earningFrom.js";
import { CreateInvestment, GetInvestments, UpdateInvestment, DeleteInvestment } from "../controller/investment/investment.js";
import { CreateInvestIn, GetInvestIn, DeleteInvestIn } from "../controller/investment/investmentIn.js";
import { CreateGoal, DeleteGoal, GetGoals } from "../controller/investment/goal.js";

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
router.get("/getallspending/:userid", GetEarnings)
router.put("/updatespending/:id", UpdateEarning);
router.delete("/deletespending/:id", DeleteEarning)

//Earning From
router.post("/createearningfrom/:id", createEarningFrom);
router.get("/getearningfrom/:userid", getEarningFrom);
router.delete("/deleteearningfrom/:id", deleteEarningFrom);

//Investment
router.post("/createinvestment/:id", CreateInvestment);
router.get("/getallinvestment/:userid", GetInvestments);
router.put("/updateinvestment/:id", UpdateInvestment);
router.delete("/deleteinvestment/:id", DeleteInvestment);

//Investment In
router.post("/createinvestmentin/:id", CreateInvestIn);
router.get("/getinvestmentin/:userid", GetInvestIn);
router.delete("/deleteinvestmentin/:id", DeleteInvestIn);

//Goal Setting
router.post("/creategoal/:id", CreateGoal);
router.get("/getallgoal/:userid", GetGoals);
router.delete("/deletegoal/:id", DeleteGoal);

export default router;