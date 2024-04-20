import Spending from "../../model/spendingModel.js";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

//Create Spending
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

//Get Spending
export const GetSpending = async (req: Request, res: Response) => {
    const userid = req.params.userid;
    try {
        const spending = await Spending.findAll({ where: { userid } });
        if (!spending) return res.status(400).json({ error: 'Spending not found' })
        return res.status(200).json({ spending });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

//Update Spending
export const UpdateSpending = async (req: Request, res: Response) => {
    const { amount, spendOn } = req.body;
    const id = req.params.id;
    let data = []
    try {
        if (amount) {
            data.push(await Spending.update({ amount }, { where: { id } }));
        }
        if (spendOn) {
            data.push(await Spending.update({ spendOn }, { where: { id } }));
        }
        else {
            return res.status(400).json({ error: 'Please provide amount or spendOn' });
        }
        if (data.length == 2) {
            return res.status(200).json({ message: 'Spending updated successfully' });
        }
        else {
            return res.status(400).json({ error: 'Spending not updated' });
        }
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}


//Delete Spending
export const DeleteSpending = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const spending = await Spending.destroy({ where: { id } });
        if (!spending) return res.status(400).json({ error: 'Spending not deleted' })
        return res.status(200).json({ message: 'Spending deleted successfully' });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}