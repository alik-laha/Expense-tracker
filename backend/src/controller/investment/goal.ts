import Goal from "../../model/goalModel.js";
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

//Create a new goal
export const CreateGoal = async (req: Request, res: Response) => {
    const { goal, amount } = req.body;
    const userid = req.params.userid;
    const id = uuidv4();
    try {
        const goals = await Goal.create({ id, goal, amount, userid });
        if (!goals) return res.status(400).json({ error: 'Goal not created' })
        return res.status(201).json({ goal });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

//Get all goals
export const GetGoals = async (req: Request, res: Response) => {
    try {
        const userid = req.params.userid;
        const goals = await Goal.findAll({ where: { userid } });
        if (!goals) return res.status(404).json({ error: 'Goals not found' });
        return res.status(200).json({ goals });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

//delete goal by id
export const DeleteGoal = async (req: Request, res: Response) => {
    try {
        const goal = await Goal.destroy({ where: { id: req.params.id } });
        if (!goal) return res.status(404).json({ error: 'Goal not found' });
        res.status(200).json({ msg: 'Goal deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}