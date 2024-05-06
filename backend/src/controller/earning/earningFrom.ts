import EarningFrom from "../../model/earningFromModel";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

//create earning from
export const createEarningFrom = async (req: Request, res: Response) => {
    try {
        const id = uuidv4();
        const { source } = req.body;
        const userid = req.cookies.user;
        const earningFrom = await EarningFrom.create({ id, source, userid });
        if (!earningFrom) return res.status(400).json({ error: 'EarningFrom not created' });
        res.status(201).json({ earningFrom });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

//get earning from by userid
export const getEarningFrom = async (req: Request, res: Response) => {
    try {
        const earningFrom = await EarningFrom.findAll({ where: { userid: req.cookies.user } });
        if (!earningFrom) return res.status(404).json({ error: 'EarningFrom not found' });
        res.status(200).json({ earningFrom });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

//Delete earning from by id
export const deleteEarningFrom = async (req: Request, res: Response) => {
    try {
        const earningFrom = await EarningFrom.destroy({ where: { id: req.params.id } });
        if (!earningFrom) return res.status(404).json({ error: 'EarningFrom not found' });
        res.status(204).json({ earningFrom });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
