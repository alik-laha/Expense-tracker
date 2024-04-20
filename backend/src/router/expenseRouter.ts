import express from "express";
const router = express.Router();
import { CreateSpending, GetSpending, UpdateSpending, DeleteSpending } from "../controller/spending/createSpending.js";
import { createSpendon, DeleteSpendon, GetAllSpendon } from "../controller/spending/spendon.js";

//Spendings
router.post("/create/:id", CreateSpending);

router.get("/getallspending/:userid", GetSpending)

router.put("/updatespending/:id", UpdateSpending);

router.delete("/deletespending/:id", DeleteSpending)

//SpendOn
router.post("/spendon", createSpendon);

router.delete("/deletespendon/:id", DeleteSpendon);

router.get("/getallspendon/:userid", GetAllSpendon);

export default router;