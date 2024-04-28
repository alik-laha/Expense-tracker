import InvestIn from "../../model/investInModel.js";
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

//Create a new investment In
export const CreateInvestIn = async (req: Request, res: Response) => {
    const { company, type } = req.body;
    const userid = req.params.userid;
    const id = uuidv4();
    try {
        const investIn = await InvestIn.create({ id, company, userid, type });
        if (!investIn) return res.status(400).json({ error: 'InvestIn not created' })
        return res.status(201).json({ investIn });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

//Get all investments In
export const GetInvestIn = async (req: Request, res: Response) => {
    try {
        const userid = req.cookies.user;
        const investIns = await InvestIn.findAll({ where: { userid } });
        if (!investIns) return res.status(404).json({ error: 'InvestIns not found' });
        return res.status(200).json({ investIns });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

// DeleteInvestIn
export const DeleteInvestIn = async (req: Request, res: Response) => {
    try {
        const investIn = await InvestIn.destroy({ where: { id: req.params.id } });
        if (!investIn) return res.status(404).json({ error: 'InvestIn not found' });
        res.status(200).json({ msg: 'InvestIn deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
