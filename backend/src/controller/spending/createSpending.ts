import Spending from "../../model/spendingModel.js";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export const CreateSpending = async (req: Request, res: Response) => {
    const { amount, date, spendOn } = req.body;
    const userid = req.params.id;
    const id = uuidv4();

    try {
        const spending = await Spending.create({ id, amount, date, spendOn, userid });
        if (!spending) return res.status(400).json({ error: 'Spending not created' })
        return res.status(201).json({ spending });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}
