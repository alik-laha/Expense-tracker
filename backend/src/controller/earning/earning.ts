import Earning from "../../model/earningModel.js";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

//Create a new earning
export const CreateEarning = async (req: Request, res: Response) => {
    const { amount, date, source } = req.body;
    const userid = req.params.id;
    const id = uuidv4();
    try {
        const earning = await Earning.create({ id, amount, date, source, userid });
        if (!earning) return res.status(400).json({ error: 'Earning not created' })
        return res.status(201).json({ earning });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

