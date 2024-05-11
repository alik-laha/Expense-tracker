import Investment from "../../model/investmentModel.js";
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

//Create a new investment
export const CreateInvestment = async (req: Request, res: Response) => {
    const { company, capital, goal } = req.body;
    const userid = req.cookies.user;
    const id = uuidv4();
    try {
        const investments = await Investment.create({ id, company, capital, Goal: goal, userid });
        if (!investments) return res.status(400).json({ error: 'Investment not created' })
        return res.status(201).json({ investments });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

//Get all investments
export const GetInvestments = async (req: Request, res: Response) => {
    try {
        const userid = req.cookies.user;
        const investments = await Investment.findAll({ where: { userid } });
        if (!investments) return res.status(404).json({ error: 'Investments not found' });
        return res.status(200).json({ investments });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

//Update investment by id
export const UpdateInvestment = async (req: Request, res: Response) => {
    const { company, capital, goal } = req.body;
    const id = req.params.id;
    let data = []
    try {
        if (company) {
            data.push(await Investment.update({ company }, { where: { id } }));
        }
        if (capital) {
            data.push(await Investment.update({ capital }, { where: { id } }));
        }
        if (goal) {
            data.push(await Investment.update({ Goal: goal }, { where: { id } }));
        }
        if (data.length > 0) {
            return res.status(200).json({ message: 'Investment updated successfully' });
        }
        else {
            return res.status(400).json({ error: 'Investment not updated' });
        }
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

//Delete investment by id
export const DeleteInvestment = async (req: Request, res: Response) => {
    try {
        const investment = await Investment.destroy({ where: { id: req.params.id } });
        if (!investment) return res.status(404).json({ error: 'Investment not found' });
        res.status(200).json({ msg: 'Investment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}