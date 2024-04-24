import Earning from "../../model/earningModel.js";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

//Create a new earning
export const CreateEarning = async (req: Request, res: Response) => {
    const { amount, source } = req.body;
    const userid = req.params.userid;
    const id = uuidv4();
    try {
        const earning = await Earning.create({ id, amount, source, userid });
        if (!earning) return res.status(400).json({ error: 'Earning not created' })
        return res.status(201).json({ earning });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

//Get all earnings
export const GetEarnings = async (req: Request, res: Response) => {
    try {
        const userid = req.cookies.user;
        const earnings = await Earning.findAll({ where: { userid } });
        if (!earnings) return res.status(404).json({ error: 'Earnings not found' });
        return res.status(200).json({ earnings });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

//Update earning by id
export const UpdateEarning = async (req: Request, res: Response) => {
    const { amount, source } = req.body;
    const id = req.params.id;
    let data = []
    try {
        if (amount) {
            data.push(await Earning.update({ amount }, { where: { id } }));
        }
        if (source) {
            data.push(await Earning.update({ source }, { where: { id } }));
        }
        if (data.length > 0) {
            return res.status(200).json({ message: 'Earning updated successfully' });
        }
        else {
            return res.status(400).json({ error: 'Earning not updated' });
        }
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

//Delete earning by id
export const DeleteEarning = async (req: Request, res: Response) => {
    try {
        const earning = await Earning.destroy({ where: { id: req.params.id } });
        if (!earning) return res.status(404).json({ error: 'Earning not found' });
        return res.status(200).json({ msg: 'Earning deleted successfully' });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}
