import Spendon from "../../model/spendonModel.js";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export const createSpendon = async (req: Request, res: Response) => {
    const { name } = req.body;
    const userid = req.params.id;
    const id = uuidv4();
    try {
        const spendon = await Spendon.create({ id, spendOn: name, userid });
        if (!spendon) return res.status(400).json({ error: 'Spendon not created' })
        return res.status(201).json({ spendon });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

//Delete Spenon
export const DeleteSpendon = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const spendon = await Spendon.destroy({ where: { id } });
        if (!spendon) return res.status(400).json({ error: 'Spendon not deleted' })
        return res.status(200).json({ message: 'Spendon deleted successfully' });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

//Get All Spendon
export const GetAllSpendon = async (req: Request, res: Response) => {
    const userid = req.params.userid;
    try {
        const spendon = await Spendon.findAll({ where: { userid } });
        if (!spendon) return res.status(400).json({ error: 'Spendon not found' })
        return res.status(200).json({ spendon });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

