import Spendon from "../../model/spendonModel.js";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export const createSpendon = async (req: Request, res: Response) => {
    const { name } = req.body;
    const id = uuidv4();
    try {
        const spendon = await Spendon.create({ id, spendOn: name });
        if (!spendon) return res.status(400).json({ error: 'Spendon not created' })
        return res.status(201).json({ spendon });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}