import EarningFrom from "../../model/earningFrom.js";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";


export const createEarningFrom = async (req: Request, res: Response) => {
    try {
        const id = uuidv4();
        const { source } = req.body;
        const userid = req.params.id;
        const earningFrom = await EarningFrom.create({ id, source, userid });
        if (!earningFrom) return res.status(400).json({ error: 'EarningFrom not created' });
        res.status(201).json({ earningFrom });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};